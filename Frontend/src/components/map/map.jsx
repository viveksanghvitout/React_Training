import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMap() {
  const position = [22.7196, 75.8577]; // Latitude, Longitude

  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
  });

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A simple popup for this location.
        </Popup>
      </Marker>
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]} >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

const locations = [
  { lat: 19.073, lng: 72.883, name: `Mumbai, population: 12,691,836 `},
  { lat: 28.652, lng: 77.231, name: `Delhi, population: 11,034,555` },
  { lat: 12.972, lng: 77.594, name: `Bengaluru, population: 8,495,492` },
  { lat: 17.384, lng: 78.456, name: `Hyderabad, population: 6,993,262` },
  { lat: 23.026, lng: 72.587, name: `Ahmedabad, population: 6,357,693` },
  { lat: 13.088, lng: 80.278, name: `Chennai, population: 4,681,087` },
  { lat: 22.563, lng: 88.363, name: `Kolkata, population: 4,631,392` },
  { lat: 21.196, lng: 72.83,  name: `Surat, population: 4,591,246` },
  { lat: 18.52,  lng: 73.855, name: `Pune, population: 3,124,458` },
  { lat: 26.92,  lng: 75.788, name: `Jaipur, population: 3,046,163` },
  { lat: 26.465, lng: 80.35,  name: `Kanpur, population: 2,823,249` },
  { lat: 26.839, lng: 80.923, name: `Lucknow, population: 2,472,011` }
];



export default MyMap;