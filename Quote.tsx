import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function Quote() {
  const { isAuthenticated, user, loading } = useAuth();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    freightType: "",
    pickupLocation: "",
    deliveryLocation: "",
    freightWeight: "",
    specialNotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation("/");
      toast.error("Please log in to request a quote");
    }
  }, [isAuthenticated, loading, setLocation]);

  // Pre-fill user info if authenticated
  useEffect(() => {
    if (user && isAuthenticated) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user, isAuthenticated]);

  if (loading) {
    return (
      <div className="w-full py-32 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-full py-32 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-900 mb-4">Authentication Required</h2>
          <p className="text-muted-foreground mb-6">
            Please log in to request a quote. It only takes a moment!
          </p>
          <a href={getLoginUrl()}>
            <Button className="bg-primary text-primary-foreground font-700 px-8 py-3">
              Log In Now
            </Button>
          </a>
        </div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Quote request submitted! We will contact you within 24 hours.");
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        phone: "",
        freightType: "",
        pickupLocation: "",
        deliveryLocation: "",
        freightWeight: "",
        specialNotes: "",
      });
    } catch (error) {
      toast.error("Failed to submit quote request. Please try again.");
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
                Get a Quote
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              Request a Quote
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and our team will provide you with a competitive quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6 pb-8 border-b border-muted">
                <h2 className="text-2xl font-900 tracking-tight">Your Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-700 tracking-tight">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="Your full name"
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

                  {/* Phone */}
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="phone" className="text-sm font-700 tracking-tight">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Freight Information */}
              <div className="space-y-6 pb-8 border-b border-muted">
                <h2 className="text-2xl font-900 tracking-tight">Freight Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Freight Type */}
                  <div className="space-y-2">
                    <label htmlFor="freightType" className="text-sm font-700 tracking-tight">
                      Freight Type *
                    </label>
                    <select
                      id="freightType"
                      name="freightType"
                      value={formData.freightType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                    >
                      <option value="">Select freight type</option>
                      <option value="general">General Freight</option>
                      <option value="hazmat">Hazardous Materials</option>
                      <option value="refrigerated">Refrigerated</option>
                      <option value="oversized">Oversized Load</option>
                      <option value="flatbed">Flatbed</option>
                      <option value="tanker">Tanker</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Freight Weight */}
                  <div className="space-y-2">
                    <label htmlFor="freightWeight" className="text-sm font-700 tracking-tight">
                      Estimated Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      id="freightWeight"
                      name="freightWeight"
                      value={formData.freightWeight}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="5000"
                    />
                  </div>

                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <label htmlFor="pickupLocation" className="text-sm font-700 tracking-tight">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="City, State"
                    />
                  </div>

                  {/* Delivery Location */}
                  <div className="space-y-2">
                    <label htmlFor="deliveryLocation" className="text-sm font-700 tracking-tight">
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-900 tracking-tight">Additional Information</h2>

                <div className="space-y-2">
                  <label htmlFor="specialNotes" className="text-sm font-700 tracking-tight">
                    Special Notes or Requirements
                  </label>
                  <textarea
                    id="specialNotes"
                    name="specialNotes"
                    value={formData.specialNotes}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-muted focus:border-primary focus:outline-none transition-colors bg-background text-foreground resize-none"
                    placeholder="Any special handling, delivery instructions, or other details..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-primary text-primary-foreground font-700 py-3 text-base hover:bg-primary/90 disabled:opacity-50"
                >
                  {isLoading ? "Submitting..." : "Request Quote"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setLocation("/")}
                  variant="outline"
                  className="border-2 border-foreground text-foreground font-700 py-3 hover:bg-foreground hover:text-background"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Why Request a Quote?
              </h2>
              <p className="text-lg text-muted-foreground">
                Get a personalized quote based on your specific transportation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Competitive Pricing",
                  description: "Transparent and competitive rates tailored to your shipment",
                },
                {
                  title: "Fast Response",
                  description: "Our team responds within 24 hours with detailed quote information",
                },
                {
                  title: "Expert Consultation",
                  description: "Get advice from our logistics experts on the best shipping solution",
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
    </div>
  );
}
