import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { companyConfig } from "../../../company-config";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-background py-24 md:py-32 lg:py-40 border-b-2 border-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/company-logo.png" alt="Memorial Transportation" className="h-10 w-auto" />
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-900 leading-tight tracking-tight">
                  Reliable
                  <br />
                  Transportation
                  <br />
                  <span className="text-primary">Solutions</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {companyConfig.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {isAuthenticated ? (
                  <Link href="/quote">
                    <Button className="bg-primary text-primary-foreground font-700 px-8 py-3 text-base">
                      Request Quote
                    </Button>
                  </Link>
                ) : (
                  <a href={getLoginUrl()}>
                    <Button className="bg-primary text-primary-foreground font-700 px-8 py-3 text-base">
                      Get Started
                    </Button>
                  </a>
                )}
                <Link href="/about">
                  <Button variant="outline" className="font-700 px-8 py-3 text-base border-2 border-foreground">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img
                src="/truck-1.jpg"
                alt="Professional truck fleet"
                className="w-full h-auto object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Comprehensive Transportation Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide a full range of logistics and transportation services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyConfig.services.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-background p-8 border-l-4 border-primary">
                  <h3 className="text-xl font-700 mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/services">
                <Button className="bg-primary text-primary-foreground font-700 px-8 py-3">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">Our Fleet</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                30 Modern Trucks Ready to Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Our fleet of 30 well-maintained vehicles ensures reliable service across all 50 states
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { image: "/truck-1.jpg", title: "Long-Haul Trucks", count: "12 units" },
                { image: "/truck-2.jpg", title: "Box Trucks", count: "10 units" },
                { image: "/truck-3.jpg", title: "Specialized Vehicles", count: "8 units" },
              ].map((truck, idx) => (
                <div key={idx} className="group overflow-hidden">
                  <div className="relative overflow-hidden h-64 bg-muted">
                    <img
                      src={truck.image}
                      alt={truck.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-secondary p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-700 mb-2 tracking-tight">{truck.title}</h3>
                    <p className="text-sm text-muted-foreground">{truck.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/gallery">
                <Button className="bg-primary text-primary-foreground font-700 px-8 py-3">
                  View Fleet Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">National Coverage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Serving All 50 States
              </h2>
              <p className="text-lg text-muted-foreground">
                With strategic locations across the country, we deliver reliable service nationwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "States Covered", value: "50" },
                { label: "Major Locations", value: "52" },
                { label: "Trucks Deployed", value: "30" },
                { label: "Years in Service", value: "5+" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-background p-6 border-l-4 border-primary text-center">
                  <p className="text-3xl font-900 text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-700 text-muted-foreground tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {isAuthenticated && (
              <div className="text-center pt-8">
                <Link href="/fleet-map">
                  <Button className="bg-primary text-primary-foreground font-700 px-8 py-3">
                    View Fleet Coverage Map
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Ready to Ship?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a quote today and experience reliable transportation solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link href="/quote">
                  <Button className="bg-primary text-primary-foreground font-700 px-8 py-3 text-base">
                    Request a Quote
                  </Button>
                </Link>
              ) : (
                <a href={getLoginUrl()}>
                  <Button className="bg-primary text-primary-foreground font-700 px-8 py-3 text-base">
                    Get Started
                  </Button>
                </a>
              )}
              <Link href="/contact">
                <Button variant="outline" className="font-700 px-8 py-3 text-base border-2 border-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
