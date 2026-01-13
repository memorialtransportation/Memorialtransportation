import { Link } from "wouter";
import { companyConfig } from "../../../company-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-24">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="/company-logo.png" alt="Memorial Transportation" className="h-12 w-auto mb-3" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {companyConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-700 text-sm tracking-tight mb-4 border-b-2 border-primary pb-2 w-fit">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/fleet-map", label: "Fleet Map" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-700 text-sm tracking-tight mb-4 border-b-2 border-primary pb-2 w-fit">
              Services
            </h4>
            <ul className="space-y-2">
              {companyConfig.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-700 text-sm tracking-tight mb-4 border-b-2 border-primary pb-2 w-fit">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="font-600 hover:text-primary transition-colors"
                >
                  {companyConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a
                  href={`tel:${companyConfig.contact.phone}`}
                  className="font-600 hover:text-primary transition-colors"
                >
                  {companyConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Address</p>
                <p className="font-600">
                  {companyConfig.contact.address}
                  <br />
                  {companyConfig.contact.city}, {companyConfig.contact.state} {companyConfig.contact.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {companyConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
