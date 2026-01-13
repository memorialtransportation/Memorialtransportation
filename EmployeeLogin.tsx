import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function EmployeeLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginMutation = trpc.employee.login.useMutation({
    onSuccess: (data: any) => {
      if (data.success) {
        sessionStorage.setItem("employeeSession", JSON.stringify(data.employee));
        toast.success("Login successful!");
        setLocation("/employee-dashboard");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "Login failed. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    try {
      await loginMutation.mutateAsync({
        username: username.trim(),
        password,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <Card className="p-8 border-2 border-border">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-900 tracking-tight">Employee Portal</h1>
              <p className="text-muted-foreground">Sign in with your credentials</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-700 tracking-tight">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                  className="border-2 border-border"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-700 tracking-tight">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="border-2 border-border"
                  autoComplete="current-password"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground font-700 py-3 h-auto"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Info */}
            <div className="pt-4 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                This portal is for authorized employees only. Unauthorized access is prohibited.
              </p>
            </div>
          </div>
        </Card>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a href="/" className="text-sm font-600 text-primary hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
