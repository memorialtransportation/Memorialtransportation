import { useState } from "react";
import { Button } from "@/components/ui/button";
import { companyConfig } from "../../../company-config";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm font-700 tracking-tight text-primary uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-700 tracking-tight text-primary uppercase mb-4">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-600">Email</p>
                    <a
                      href={`mailto:${companyConfig.contact.email}`}
                      className="text-lg font-700 hover:text-primary transition-colors"
                    >
                      {companyConfig.contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-600">Phone</p>
                    <a
                      href={`tel:${companyConfig.contact.phone}`}
                      className="text-lg font-700 hover:text-primary transition-colors"
                    >
                      {companyConfig.contact.phone}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-600">Address</p>
                    <p className="text-lg font-700">
                      {companyConfig.contact.address}
                      <br />
                      {companyConfig.contact.city}, {companyConfig.contact.state} {companyConfig.contact.zip}
                      <br />
                      {companyConfig.contact.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-sm font-700 tracking-tight text-primary uppercase mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 9:00 AM - 3:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-700 tracking-tight">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-700 tracking-tight">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-700 tracking-tight">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-700 tracking-tight">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground font-700 py-3 text-base hover:bg-primary/90 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Find Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in Stone Mountain, Georgia, we serve the entire United States
              </p>
            </div>

            <div className="w-full h-96 bg-muted border-2 border-muted flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground font-600">
                  {companyConfig.contact.address}
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  {companyConfig.contact.city}, {companyConfig.contact.state} {companyConfig.contact.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
