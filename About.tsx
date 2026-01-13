import { companyConfig } from "../../../company-config";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm font-700 tracking-tight text-primary uppercase">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              {companyConfig.name}
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional trucking and logistics services since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {companyConfig.description}
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-primary pl-6">
                <h3 className="text-xl font-700 tracking-tight">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide reliable, cost-effective transportation solutions that exceed our clients' expectations. We believe in building long-term partnerships through exceptional service and professional excellence.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-primary pl-6">
                <h3 className="text-xl font-700 tracking-tight">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-700 mt-1">•</span>
                    <span><strong>Reliability:</strong> On-time delivery, every time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-700 mt-1">•</span>
                    <span><strong>Safety:</strong> Industry-leading safety standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-700 mt-1">•</span>
                    <span><strong>Professionalism:</strong> Expert team and service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-700 mt-1">•</span>
                    <span><strong>Transparency:</strong> Clear communication and pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-96">
              <img
                src="/warehouse-operations.jpg"
                alt="Modern warehouse operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                By The Numbers
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to excellence is reflected in our growth and success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "160+", label: "Trucks in Fleet" },
                { number: "6", label: "Major Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "99.9%", label: "On-Time Rate" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-background p-8 border-l-4 border-primary">
                  <p className="text-4xl font-900 text-primary mb-2">{stat.number}</p>
                  <p className="text-sm font-700 text-muted-foreground tracking-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">
                  Trusted By
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Our Clients
              </h2>
              <p className="text-lg text-muted-foreground">
                We are proud to work with leading companies across various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companyConfig.clients.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-secondary p-6 border border-muted flex items-center justify-center text-center hover:border-primary transition-colors duration-300"
                >
                  <p className="font-700 text-sm tracking-tight text-muted-foreground">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Credentials & Certifications
              </h2>
              <p className="text-lg text-muted-foreground">
                We maintain the highest industry standards and regulatory compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "USDOT Number", value: companyConfig.credentials.usdot },
                { label: "DUNS Number", value: companyConfig.credentials.duns },
                { label: "CAGE Code", value: companyConfig.credentials.cage },
                { label: "NAICS Codes", value: "484121, 484110, 488510" },
              ].map((cred, idx) => (
                <div key={idx} className="bg-background p-8 border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground font-600 mb-2">{cred.label}</p>
                  <p className="text-2xl font-900 tracking-tight">{cred.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
