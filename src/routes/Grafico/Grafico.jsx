import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { API_BASE_URL } from '../../../public/config'
import { MainHome } from '../Home/styleHome';


Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const myHeaders = new Headers();
myHeaders.append("fiware-service", "smart");
myHeaders.append("fiware-servicepath", "/");
myHeaders.append("accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

function LiveGraph() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temperatureResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Temperatura`,
          requestOptions
        );
        const temperatureData = await temperatureResponse.json();
        const temperature = temperatureData.value || 0;
        console.log('Temperatura:', temperatureData);

        const humidityResponse = await fetch(
          `${API_BASE_URL}/v2/entities/urn:ngsi-ld:next_gps/attrs/Umidade`,
          requestOptions
        );
        const humidityData = await humidityResponse.json();
        const humidity = humidityData.value || 0;

        console.log('Umidade:', humidityData);

        const timestamp = new Date().toLocaleTimeString();

        setTemperatureData((prevData) => [...prevData, temperature].slice(-10));
        setHumidityData((prevData) => [...prevData, humidity].slice(-10));
        setLabels((prevLabels) => [...prevLabels, timestamp].slice(-10));

        setError(null);
      } catch (err) {
        console.error('Erro ao buscar os dados:', err); 
        setError("Erro ao buscar dados: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); 

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: temperatureData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Umidade (%)',
        data: humidityData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category', 
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    
    <div>
      <MainHome style={{textAlign:center}}>
      <h1>Gráfico de Temperatura e Umidade ao Vivo</h1>
      {loading ? (
        <p style={{color: 'white'}}>Carregando gráfico...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <Line data={data} options={options} />
      )}
      </MainHome>
    </div>
  );
}

export default LiveGraph;
