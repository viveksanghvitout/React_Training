import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMap() {
  const position = [22.7196, 75.8577]; // Latitude, Longitude

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A simple popup for this location.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;