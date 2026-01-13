import { companyConfig } from "../../../company-config";

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm font-700 tracking-tight text-primary uppercase">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              From domestic to international shipping, we provide tailored transportation services for every need
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {companyConfig.services.map((service) => (
              <div key={service.id} className="space-y-6 pb-12 border-b border-muted last:border-b-0">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-900 tracking-tight">{service.title}</h3>
                      {service.naicsCode && (
                        <p className="text-xs text-muted-foreground font-600 mt-1">
                          NAICS: {service.naicsCode}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 pl-4 border-l-4 border-primary">
                  <p className="font-700 text-sm">Key Features:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-700 mt-0.5">✓</span>
                      <span>Professional and experienced team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-700 mt-0.5">✓</span>
                      <span>Competitive and transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-700 mt-0.5">✓</span>
                      <span>Real-time tracking and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-700 mt-0.5">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine industry expertise with modern technology to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Reliability",
                  description: "99.9% on-time delivery rate with professional drivers and well-maintained fleet",
                },
                {
                  title: "Expertise",
                  description: "Over 5 years of experience handling diverse logistics and transportation needs",
                },
                {
                  title: "Technology",
                  description: "Real-time GPS tracking and digital communication for complete transparency",
                },
                {
                  title: "Safety",
                  description: "Industry-leading safety standards and comprehensive insurance coverage",
                },
                {
                  title: "Flexibility",
                  description: "Custom solutions tailored to your specific business requirements",
                },
                {
                  title: "Support",
                  description: "24/7 customer support team ready to assist with any questions or concerns",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-background p-8 border-l-4 border-primary">
                  <h3 className="text-lg font-700 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We operate throughout the United States and offer international shipping services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Domestic Coverage",
                  items: [
                    "All 50 states",
                    "Local and regional delivery",
                    "Long-distance freight",
                    "Express shipping options",
                  ],
                },
                {
                  title: "International Services",
                  items: [
                    "Cross-border logistics",
                    "Customs coordination",
                    "Global freight forwarding",
                    "International partnerships",
                  ],
                },
              ].map((area, idx) => (
                <div key={idx} className="bg-secondary p-8 border-l-4 border-primary">
                  <h3 className="text-xl font-700 mb-6 tracking-tight">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground border-b border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Contact us today to discuss your transportation and logistics needs. Our team is ready to provide a customized solution for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-foreground text-primary font-700 px-8 py-3 text-base hover:bg-opacity-90 transition-all"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
