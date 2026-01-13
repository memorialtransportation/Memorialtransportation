import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, Home } from "lucide-react";

interface EmployeeSession {
  id: number;
  username: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
}

export default function EmployeeDashboard() {
  const [, setLocation] = useLocation();
  const [employee, setEmployee] = useState<EmployeeSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get employee data from session storage
    const storedEmployee = sessionStorage.getItem("employeeSession");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    } else {
      setLocation("/employee-login");
    }
    setIsLoading(false);
  }, [setLocation]);

  const handleLogout = () => {
    sessionStorage.removeItem("employeeSession");
    setLocation("/employee-login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!employee) {
    return null;
  }

  const fullName = `${employee.firstName || ""} ${employee.lastName || ""}`.trim() || employee.username;
  const roleDisplay = employee.role.charAt(0).toUpperCase() + employee.role.slice(1);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-900 tracking-tight">Employee Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, {fullName}</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setLocation("/")}
                className="flex items-center gap-2"
              >
                <Home size={18} />
                Home
              </Button>
              <Button
                onClick={handleLogout}
                className="bg-primary text-primary-foreground flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Profile Card */}
          <Card className="p-6 border-2 border-border">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-700 text-primary uppercase tracking-tight">Profile</p>
                <h3 className="text-2xl font-900 mt-2">{fullName}</h3>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-700 tracking-tight">Username</p>
                  <p className="font-600">{employee.username}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-700 tracking-tight">Role</p>
                  <p className="font-600 text-primary">{roleDisplay}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 border-2 border-border border-l-4 border-l-primary">
            <div className="space-y-4">
              <p className="text-xs font-700 text-primary uppercase tracking-tight">Quick Stats</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Active Shipments</p>
                  <p className="text-3xl font-900 text-primary">--</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed Today</p>
                  <p className="text-3xl font-900">--</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Status */}
          <Card className="p-6 border-2 border-border">
            <div className="space-y-4">
              <p className="text-xs font-700 text-primary uppercase tracking-tight">Status</p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-600">Online</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Last login: {new Date().toLocaleString()}
              </p>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-900 tracking-tight mb-6">Available Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature Cards */}
              <Card className="p-6 border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary"></div>
                  <h3 className="text-lg font-700 tracking-tight">Fleet Management</h3>
                  <p className="text-sm text-muted-foreground">
                    View and manage truck assignments, locations, and status updates.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary"></div>
                  <h3 className="text-lg font-700 tracking-tight">Shipment Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor active shipments and delivery progress in real-time.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary"></div>
                  <h3 className="text-lg font-700 tracking-tight">Dispatch Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    Create and manage dispatch orders for drivers and vehicles.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-border hover:border-primary transition-colors cursor-pointer">
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-primary"></div>
                  <h3 className="text-lg font-700 tracking-tight">Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate reports on fleet performance, deliveries, and analytics.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-background border-2 border-border border-l-4 border-l-primary">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a demo employee dashboard. Additional features like real-time fleet tracking, shipment management, and reporting will be available soon. Contact your administrator for access to specific features based on your role.
          </p>
        </div>
      </div>
    </div>
  );
}
