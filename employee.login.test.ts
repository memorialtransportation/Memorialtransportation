import { describe, expect, it, beforeEach } from "vitest";
import { hashPassword, verifyPassword, authenticateEmployee } from "./db";

describe("Employee Authentication", () => {
  describe("Password Hashing", () => {
    it("should hash a password", () => {
      const password = "testPassword123";
      const hash = hashPassword(password);
      
      expect(hash).toBeDefined();
      expect(hash).toContain(":");
      expect(hash.split(":")).toHaveLength(2);
    });

    it("should create different hashes for the same password", () => {
      const password = "testPassword123";
      const hash1 = hashPassword(password);
      const hash2 = hashPassword(password);
      
      expect(hash1).not.toBe(hash2);
    });

    it("should verify a correct password", () => {
      const password = "testPassword123";
      const hash = hashPassword(password);
      
      const isValid = verifyPassword(password, hash);
      expect(isValid).toBe(true);
    });

    it("should reject an incorrect password", () => {
      const password = "testPassword123";
      const wrongPassword = "wrongPassword456";
      const hash = hashPassword(password);
      
      const isValid = verifyPassword(wrongPassword, hash);
      expect(isValid).toBe(false);
    });

    it("should handle malformed hash gracefully", () => {
      const password = "testPassword123";
      const malformedHash = "invalid-hash-format";
      
      const isValid = verifyPassword(password, malformedHash);
      expect(isValid).toBe(false);
    });

    it("should handle empty hash gracefully", () => {
      const password = "testPassword123";
      
      const isValid = verifyPassword(password, "");
      expect(isValid).toBe(false);
    });
  });

  describe("Password Verification", () => {
    it("should verify password with correct format", () => {
      const password = "mySecurePassword";
      const hash = hashPassword(password);
      
      expect(verifyPassword(password, hash)).toBe(true);
    });

    it("should be case-sensitive", () => {
      const password = "TestPassword";
      const hash = hashPassword(password);
      
      expect(verifyPassword("testpassword", hash)).toBe(false);
      expect(verifyPassword("TESTPASSWORD", hash)).toBe(false);
      expect(verifyPassword("TestPassword", hash)).toBe(true);
    });

    it("should handle special characters in password", () => {
      const password = "P@ssw0rd!#$%";
      const hash = hashPassword(password);
      
      expect(verifyPassword(password, hash)).toBe(true);
      expect(verifyPassword("P@ssw0rd!#$", hash)).toBe(false);
    });
  });

  describe("Employee Authentication", () => {
    it("should return null for non-existent employee", async () => {
      const result = await authenticateEmployee("nonexistent", "password");
      expect(result).toBeNull();
    });

    it("should return null for inactive employee", async () => {
      // This test assumes database is properly set up
      // In a real scenario, you'd need to mock or use a test database
      const result = await authenticateEmployee("inactive_user", "password");
      expect(result).toBeNull();
    });
  });
});
