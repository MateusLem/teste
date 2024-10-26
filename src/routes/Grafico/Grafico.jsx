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
        // Faz o fetch da temperatura
        const temperatureResponse = await fetch(
          `http://3.149.239.60:1026/v2/entities/urn:ngsi-ld:next_gps/attrs/Temperatura`,
          requestOptions
        );
        const temperatureData = await temperatureResponse.json();
        const temperature = temperatureData.value || 0;

        // Log para verificar o retorno da temperatura
        console.log('Temperatura:', temperatureData);

        // Faz o fetch da umidade
        const humidityResponse = await fetch(
          `http://3.149.239.60:1026/v2/entities/urn:ngsi-ld:next_gps/attrs/Umidade`,
          requestOptions
        );
        const humidityData = await humidityResponse.json();
        const humidity = humidityData.value || 0;

        // Log para verificar o retorno da umidade
        console.log('Umidade:', humidityData);

        const timestamp = new Date().toLocaleTimeString(); // Marca de tempo para o gráfico

        // Atualiza os dados de temperatura, umidade e os rótulos (timestamp)
        setTemperatureData((prevData) => [...prevData, temperature].slice(-10));
        setHumidityData((prevData) => [...prevData, humidity].slice(-10));
        setLabels((prevLabels) => [...prevLabels, timestamp].slice(-10));

        setError(null); // Reseta o erro se a requisição for bem-sucedida
      } catch (err) {
        console.error('Erro ao buscar os dados:', err); // Log de erro
        setError("Erro ao buscar dados: " + err.message);
      } finally {
        setLoading(false); // Finaliza o carregamento inicial
      }
    };

    fetchData(); // Busca inicial

    const interval = setInterval(fetchData, 5000); // Atualiza os dados a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  const data = {
    labels, // Rótulos no eixo X (timestamps)
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
        type: 'category', // Define o tipo de escala para o eixo X
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
      <MainHome>
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
