import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

const LocationPicker = () => {
  const [position, setPosition] = useState(null);
  const [addr, setAddr] = useState(null);


  const fetchAddress = async (lat, lng) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await res.json();
    return data.display_name;
    };


  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        fetchAddress(e.latlng.lat, e.latlng.lng).then(addr => {
            console.log("Address:", addr);
            setAddr(addr);
        });
      }
    });

    return position ? <Marker position={position} /> : null;
  };

  return (
    <>
      <MapContainer center={[22.7196, 75.8577]} zoom={12} style={{ height: "500px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>

      {position && (
        <p>
          📍"Address:" {addr}, Latitude: {position.lat}, Longitude: {position.lng}
        </p>
      )}
    </>
  );
};

export default LocationPicker;
