import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ FIX: Use CDN marker icons to prevent Vite image issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 🌍 Company data with coordinates
const companies = [
  {
    name: "Blue Focus",
    position: [25.276987, 55.296249], // Dubai
    description: "Headquartered in Dubai, established in 2002",
  },
  {
    name: "Greek Souvlaki",
    position: [38.9637, 35.2433], // Turkey (general Europe area)
    description: "European-based food brand",
  },
];

const GlobalPresenceMap = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        

        <MapContainer
          center={[30, 20]}
          zoom={2}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%", borderRadius: "1rem" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {companies.map((company, index) => (
            <Marker key={index} position={company.position}>
              <Popup>
                <strong>{company.name}</strong>
                <br />
                {company.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default GlobalPresenceMap;
