import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';
import areaDeAtencionGeoJSON from '../../components/areaDeAtencionGeoJSON';
// Tu GeoJSON


const Mapa = () => {
  return (
    <MapContainer center={[-12.0464, -77.0428]} zoom={13} scrollWheelZoom={false} className="mapa">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-12.0972,-76.9854]}>
        <Popup>
          Zona de Reparto <br /> <b>BookSwap</b>
        </Popup>
      </Marker>
      {/* Nueva capa GeoJSON para el área de atención */}
      <GeoJSON data={areaDeAtencionGeoJSON} />
    </MapContainer>
  );
};

export default Mapa;
