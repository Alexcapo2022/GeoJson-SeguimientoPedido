import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';
import areaDeAtencionGeoJSON from '../../components/areaDeAtencionGeoJSON';

const Mapa = () => {
  const coordinates = areaDeAtencionGeoJSON.features[0].geometry.coordinates[0];

  return (
    <MapContainer center={[-12.0464, -77.0428]} zoom={13} scrollWheelZoom={false} className="mapa">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-12.0464, -77.0428]}>
        <Popup>
          Lima, Perú. <br /> ¡Bienvenido!
        </Popup>
      </Marker>
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate[1], coordinate[0]]}>
          <Popup>
            Local {index + 1}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Mapa;
