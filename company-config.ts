/**
 * Company Configuration
 * Memorial Transportation - Professional Trucking & Logistics Services
 */

export const companyConfig = {
  name: "Memorial Transportation",
  tagline: "Reliable Logistics Solutions for Your Business",
  description:
    "Memorial Transportation is headquartered in Atlanta, GA and has been providing high-quality trucking and logistic services since 2019. Our company's aim not only focuses on moving your goods from one location to another, but rather strives to understand your business to design a solution that fits your requirements.",
  
  contact: {
    email: "info@memorialtransportation.com",
    phone: "+1 (770) 555-0100", // Placeholder - update with actual number
    address: "5300 Memorial Drive, Unit #104",
    city: "Stone Mountain",
    state: "Georgia",
    zip: "30083",
    country: "USA",
  },

  fleet: {
    totalTrucks: 160,
    displayTrucks: 30, // Featured on website
  },

  services: [
    {
      id: "long-distance",
      title: "Long-Distance Freight",
      description: "General freight trucking for long-distance transportation across the country",
      icon: "🚛",
      naicsCode: "484121",
    },
    {
      id: "local",
      title: "Local Delivery",
      description: "Efficient local trucking and delivery services in the Atlanta metropolitan area",
      icon: "📦",
      naicsCode: "484110",
    },
    {
      id: "freight-arrangements",
      title: "Freight Arrangements",
      description: "Professional freight transportation arrangement and logistics coordination",
      icon: "📋",
      naicsCode: "488510",
    },
    {
      id: "domestic",
      title: "Domestic Shipping",
      description: "Reliable domestic shipping solutions with competitive pricing",
      icon: "🌎",
    },
    {
      id: "international",
      title: "International Shipping",
      description: "Cross-border logistics and international freight services",
      icon: "✈️",
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      description: "Tailored logistics solutions designed for your specific business requirements",
      icon: "⚙️",
    },
  ],

  clients: [
    "American Linehaul",
    "Amazon",
    "Freight Master Inc",
    "Logistic Dynamic Inc",
    "Syfancorp",
    "Rim Pacific",
  ],

  credentials: {
    duns: "101267294",
    cage: "8ZDR1",
    usdot: "3343999",
  },

  social: {
    // Add social media links as needed
    facebook: "",
    linkedin: "",
    twitter: "",
  },
};
