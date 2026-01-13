import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/truck-1.jpg", alt: "Red semi-truck on highway at golden hour", category: "Fleet" },
    { src: "/truck-2.jpg", alt: "Blue freight truck at logistics facility", category: "Fleet" },
    { src: "/truck-3.jpg", alt: "Black tanker truck with reflective details", category: "Fleet" },
    { src: "/workers-logistics.jpg", alt: "Logistics workers loading cargo", category: "Operations" },
    { src: "/warehouse-operations.jpg", alt: "Modern warehouse with organized cargo", category: "Operations" },
    { src: "/truck-sample-1.webp", alt: "Professional truck photo", category: "Fleet" },
  ];

  const uniqueCategories = Array.from(new Set(galleryImages.map((img) => img.category)));
  const categories = ["All", ...uniqueCategories];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm font-700 tracking-tight text-primary uppercase">
                Fleet Gallery
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              Our Fleet & Operations
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our modern trucks and professional logistics operations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-16 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-700 text-sm tracking-tight transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "border-2 border-foreground text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={idx}
                className="relative h-80 overflow-hidden group cursor-pointer border-2 border-muted hover:border-primary transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-700 text-sm">{image.category}</p>
                  <p className="text-white/70 text-xs">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-96 md:max-h-full">
            <img
              src={selectedImage}
              alt="Full size gallery image"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 hover:bg-primary/80 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-secondary border-t border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Fleet Statistics
              </h2>
              <p className="text-lg text-muted-foreground">
                Our modern and well-maintained fleet ensures reliable service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "160+", label: "Total Trucks" },
                { number: "30+", label: "Featured Fleet" },
                { number: "99.9%", label: "Uptime Rate" },
                { number: "5+", label: "Years in Service" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-background p-8 border-l-4 border-primary text-center">
                  <p className="text-4xl font-900 text-primary mb-2">{stat.number}</p>
                  <p className="text-sm font-700 text-muted-foreground tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
