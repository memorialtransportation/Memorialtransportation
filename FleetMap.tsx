import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";
import { majorLocations, getLocationsByType as getLocationsByTypeUtil } from "../../../shared/locations";

interface MapMarker {
  id: string;
  name: string;
  city: string;
  state: string;
  type: string;
  lat: number;
  lng: number;
  trucks: number;
  description: string;
}

export default function FleetMap() {
  const { isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, loading, setLocation]);

  // Initialize map
  useEffect(() => {
    if (!isAuthenticated || loading) return;

    const initMap = () => {
      const mapElement = document.getElementById("fleet-map");
      if (!mapElement) return;

      const map = new google.maps.Map(mapElement, {
        zoom: 4,
        center: { lat: 39.8283, lng: -98.5795 }, // Center of USA
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }],
          },
        ],
      });

      setMapInstance(map);
      addMarkersToMap(map);
    };

    // Check if Google Maps is loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Wait for Google Maps to load
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDummyKey&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [isAuthenticated, loading]);

  const addMarkersToMap = (map: google.maps.Map) => {
    const newMarkers: google.maps.Marker[] = [];
    const filteredLocations =
      filterType === "all"
        ? majorLocations
        : majorLocations.filter((loc) => loc.type === filterType);

    filteredLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        map: map,
        title: location.name,
        icon: getMarkerIcon(location.type),
      });

      marker.addListener("click", () => {
        setSelectedMarker({
          id: location.id,
          name: location.name,
          city: location.city,
          state: location.state,
          type: location.type,
          lat: location.latitude,
          lng: location.longitude,
          trucks: location.trucks || 0,
          description: location.description || "",
        });

        // Center map on marker
        map.setCenter({ lat: location.latitude, lng: location.longitude });
        map.setZoom(10);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  };

  const getMarkerIcon = (type: string): string => {
    const icons: Record<string, string> = {
      "major-city": "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      port: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      "distribution-center": "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      airport: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      "logistics-hub": "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
    };
    return icons[type] || icons["major-city"];
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    if (mapInstance) {
      // Clear existing markers
      markers.forEach((marker) => marker.setMap(null));
      // Add filtered markers
      const filteredLocations =
        type === "all" ? majorLocations : majorLocations.filter((loc) => loc.type === type);
      const newMarkers: google.maps.Marker[] = [];

      filteredLocations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: mapInstance,
          title: location.name,
          icon: getMarkerIcon(location.type),
        });

        marker.addListener("click", () => {
          setSelectedMarker({
            id: location.id,
            name: location.name,
            city: location.city,
            state: location.state,
            type: location.type,
            lat: location.latitude,
            lng: location.longitude,
            trucks: location.trucks || 0,
            description: location.description || "",
          });
          mapInstance.setCenter({ lat: location.latitude, lng: location.longitude });
          mapInstance.setZoom(10);
        });

        newMarkers.push(marker);
      });

      setMarkers(newMarkers);
    }
  };

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
          <h2 className="text-3xl font-900 mb-4">Fleet Coverage Map</h2>
          <p className="text-muted-foreground mb-6">
            Please log in to view our national fleet coverage and distribution network.
          </p>
          <a href={getLoginUrl()}>
            <button className="bg-primary text-primary-foreground font-700 px-8 py-3 hover:bg-primary/90">
              Log In Now
            </button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm font-700 tracking-tight text-primary uppercase">
                National Coverage
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-900 leading-tight tracking-tight">
              Fleet Coverage Map
            </h1>
            <p className="text-xl text-muted-foreground">
              View our truck distribution across all 50 states and major logistics hubs
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Filter Section */}
              <div className="bg-secondary p-6 border-l-4 border-primary">
                <h3 className="text-lg font-700 mb-4 tracking-tight">Filter by Type</h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Locations" },
                    { value: "major-city", label: "Major Cities" },
                    { value: "airport", label: "Airports" },
                    { value: "port", label: "Ports" },
                    { value: "distribution-center", label: "Distribution Centers" },
                    { value: "logistics-hub", label: "Logistics Hubs" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange(option.value)}
                      className={`w-full text-left px-4 py-2 text-sm font-600 transition-all ${
                        filterType === option.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-muted hover:border-primary"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="bg-secondary p-6 border-l-4 border-primary">
                <h3 className="text-lg font-700 mb-4 tracking-tight">Legend</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Major Cities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Airports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Ports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Distribution Centers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span>Logistics Hubs</span>
                  </div>
                </div>
              </div>

              {/* Selected Location Info */}
              {selectedMarker && (
                <div className="bg-background border-2 border-primary p-6">
                  <h4 className="text-lg font-700 mb-3 tracking-tight">{selectedMarker.name}</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Location:</strong> {selectedMarker.city}, {selectedMarker.state}
                    </p>
                    <p>
                      <strong>Type:</strong>{" "}
                      {selectedMarker.type.replace("-", " ").toUpperCase()}
                    </p>
                    <p>
                      <strong>Trucks:</strong> {selectedMarker.trucks}
                    </p>
                    <p className="text-muted-foreground">{selectedMarker.description}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <div
                id="fleet-map"
                className="w-full h-96 md:h-full min-h-96 lg:min-h-screen border-2 border-muted"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 md:py-32 bg-secondary border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                National Coverage Statistics
              </h2>
              <p className="text-lg text-muted-foreground">
                Our extensive network spans across all 50 states with strategic locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { label: "States Covered", value: "50" },
                { label: "Major Locations", value: "52" },
                { label: "Trucks Deployed", value: "160+" },
                { label: "Airports", value: "30+" },
                { label: "Ports", value: "12+" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-background p-6 border-l-4 border-primary text-center">
                  <p className="text-3xl font-900 text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-700 text-muted-foreground tracking-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-24 md:py-32 bg-background border-b border-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary"></div>
                <span className="text-sm font-700 tracking-tight text-primary uppercase">
                  Coverage Details
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-900 leading-tight tracking-tight">
                Comprehensive Service Network
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Major Cities",
                  description: "Strategic locations in all major metropolitan areas for quick access",
                  count: getLocationsByTypeUtil("major-city").length,
                },
                {
                  title: "Airports",
                  description: "Direct access to major airports for time-sensitive shipments",
                  count: getLocationsByTypeUtil("airport").length,
                },
                {
                  title: "Ports",
                  description: "Connections to major seaports for international logistics",
                  count: getLocationsByTypeUtil("port").length,
                },
                {
                  title: "Distribution Centers",
                  description: "Strategic hubs for efficient cargo distribution",
                  count: getLocationsByTypeUtil("distribution-center").length,
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary p-8 border-l-4 border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-700 tracking-tight">{item.title}</h3>
                    <span className="text-2xl font-900 text-primary">{item.count}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get locations by type
function getLocationsByTypeLocal(type: string) {
  return majorLocations.filter((loc) => loc.type === type);
}
