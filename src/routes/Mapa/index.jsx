import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MainHome } from "../Home/styleHome";
import { geoPosition } from "../../../public/config";

function LiveTracker() {
  const [position, setPosition] = useState([0, 0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const updatePosition = async () => {
      try {
        await geoPosition(setPosition, setError);
        setLoading(false); 
      } catch (err) {
        setError("Erro ao obter posição");
        setLoading(false);
      }
    };

    updatePosition();

    const interval = setInterval(updatePosition, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MainHome style={{ textAlign: "center", alignContent: "center", alignItems: "center" }}>
        <h1>Rastreador ao Vivo</h1>
        {loading ? (
          <p style={{ color: "white" }}>Mapa carregando...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          
          position[0] !== 0 && position[1] !== 0 && (
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "60vh", width: "70%" }}
              whenCreated={(mapInstance) => {
                mapRef.current = mapInstance;
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} ref={markerRef}>
                <Popup>
                  Posição Atual: {position[0]}, {position[1]}
                </Popup>
              </Marker>
            </MapContainer>
          )
        )}
      </MainHome>
    </div>
  );
}

export default LiveTracker;
