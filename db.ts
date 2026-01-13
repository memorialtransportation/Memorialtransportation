import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, employees, type Employee } from "../drizzle/schema";
import { ENV } from './_core/env';
import { scryptSync, randomBytes } from "crypto";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.


/**
 * Hash a password using scrypt
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

/**
 * Verify a password against a hash
 */
export function verifyPassword(password: string, hash: string): boolean {
  const [salt, storedHash] = hash.split(":");
  if (!salt || !storedHash) return false;
  const computedHash = scryptSync(password, salt, 64).toString("hex");
  return computedHash === storedHash;
}

/**
 * Get employee by username
 */
export async function getEmployeeByUsername(username: string): Promise<Employee | undefined> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get employee: database not available");
    return undefined;
  }

  const result = await db
    .select()
    .from(employees)
    .where(eq(employees.username, username))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Authenticate employee with username and password
 */
export async function authenticateEmployee(
  username: string,
  password: string
): Promise<Employee | null> {
  // DEMO LOGIN (no database required)
  // This fallback only runs when DATABASE_URL is not set.
  // Remove this block once you connect a real database and seed employees.
  if (!process.env.DATABASE_URL) {
    if (username === "memorialtransportation" && password === "asiya$08") {
      const now = new Date();
      return {
        id: 0,
        username,
        email: "demo@memorialtransportation.com",
        passwordHash: "demo",
        firstName: "Demo",
        lastName: "Admin",
        role: "admin",
        isActive: 1,
        createdAt: now,
        updatedAt: now,
      } as Employee;
    }
    return null;
  }

  const employee = await getEmployeeByUsername(username);
  if (!employee || !employee.isActive) {
    return null;
  }

  if (!verifyPassword(password, employee.passwordHash)) {
    return null;
  }

  return employee;
}
