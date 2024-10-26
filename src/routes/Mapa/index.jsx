import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { API_BASE_URL } from "../../../public/config";
import { MainHome } from "../Home/styleHome";

const myHeaders = new Headers();
myHeaders.append("fiware-service", "smart");
myHeaders.append("fiware-servicepath", "/");
myHeaders.append("accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

function LiveTracker() {
  const [position, setPosition] = useState([0, 0]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const markerRef = useRef(null); 

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const latitudeResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Latitude`,
          requestOptions
        );
        const latitudeData = await latitudeResponse.json();
        const latitude = latitudeData.value;

        const longitudeResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Longitude`,
          requestOptions
        );
        const longitudeData = await longitudeResponse.json();
        const longitude = longitudeData.value;

        const newPosition = [latitude, longitude];

        if (newPosition[0] === 0 && newPosition[1] === 0) {
          setError("Rastreador desativado");
        } else {
          setPosition(newPosition); 
          setError(null);
        }

        if (markerRef.current) {
          markerRef.current.setLatLng(newPosition);
        }
      } catch (err) {
        setError("Rastreador desativado: " + err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchPosition();

    const interval = setInterval(fetchPosition, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MainHome>
      <h1>Rastreador ao Vivo</h1>
      {loading ? (
        <p style={{color: "white" }}>Mapa carregando...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={position} 
            ref={markerRef} 
          >
            <Popup>
              Posição Atual: {position[0]}, {position[1]}
            </Popup>
          </Marker>
        </MapContainer>
      )}


      </MainHome>
    </div>
  );
}

export default LiveTracker;
