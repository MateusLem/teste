import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { API_BASE_URL } from "../../../public/config"; // Importa o endereço IP do config.js
import { MainHome } from "../Home/styleHome";

// Definir o cabeçalho para as requisições
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
  const [position, setPosition] = useState([0, 0]); // Estado inicial com latitude e longitude 0
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento inicial
  const [error, setError] = useState(null); // Estado para capturar erros

  const markerRef = useRef(null); // Referência para o marcador

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        // Faz o fetch da latitude usando o IP do arquivo config.js
        const latitudeResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Latitude`,
          requestOptions
        );
        const latitudeData = await latitudeResponse.json();
        const latitude = latitudeData.value; // Pega o valor da latitude

        // Faz o fetch da longitude usando o IP do arquivo config.js
        const longitudeResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Longitude`,
          requestOptions
        );
        const longitudeData = await longitudeResponse.json();
        const longitude = longitudeData.value; // Pega o valor da longitude

        const newPosition = [latitude, longitude];

        if (newPosition[0] === 0 && newPosition[1] === 0) {
          setError("Rastreador desativado"); // Se a posição continuar como [0,0], mostra erro
        } else {
          setPosition(newPosition); // Atualiza a posição no estado
          setError(null); // Reseta o erro se a requisição for bem-sucedida
        }

        // Atualiza o marcador diretamente sem alterar o estado toda hora
        if (markerRef.current) {
          markerRef.current.setLatLng(newPosition);
        }
      } catch (err) {
        setError("Rastreador desativado: " + err.message);
      } finally {
        setLoading(false); // Finaliza o carregamento após a primeira tentativa
      }
    };

    fetchPosition(); // Busca inicial

    const interval = setInterval(fetchPosition, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
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
            position={position} // Posição inicial
            ref={markerRef} // Atribuímos a referência ao marcador
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
