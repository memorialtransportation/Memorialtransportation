import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/fleet-map", label: "Fleet Map" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/company-logo.png" alt="Memorial Transportation" className="h-12 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="font-600 text-sm tracking-tight hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/employee-login"
              className="text-sm font-600 hover:text-primary transition-colors"
            >
              Employee Login
            </a>
            {isAuthenticated ? (
              <>
                <Link href="/quote">
                  <Button className="bg-primary text-primary-foreground font-600 px-6 py-2">
                    Get Quote
                  </Button>
                </Link>
                <button
                  onClick={() => logout()}
                  className="text-sm font-600 hover:text-primary transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href={getLoginUrl()}
                  className="text-sm font-600 hover:text-primary transition-colors"
                >
                  Login
                </a>
                <Link href="/quote">
                  <Button className="bg-primary text-primary-foreground font-600 px-6 py-2">
                    Get Quote
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block font-600 text-sm tracking-tight hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="border-t border-muted pt-3 space-y-2">
              <a
                href="/employee-login"
                className="block text-sm font-600 py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Employee Login
              </a>
              {isAuthenticated ? (
                <>
                  <Link href="/quote">
                    <Button className="w-full bg-primary text-primary-foreground font-600">
                      Get Quote
                    </Button>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full text-sm font-600 py-2 hover:bg-secondary transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href={getLoginUrl()}
                    className="block text-sm font-600 py-2 hover:text-primary transition-colors"
                  >
                    Login
                  </a>
                  <Link href="/quote">
                    <Button className="w-full bg-primary text-primary-foreground font-600">
                      Get Quote
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
