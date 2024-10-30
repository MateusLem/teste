import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { MainHome } from '../Home/styleHome';
import { enviormentData } from '../../../public/config';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LiveGraph() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    try {
      await enviormentData(setTemperatureData, setHumidityData, setLabels);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar os dados:', err);
      setError("Erro ao buscar dados: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();

    const interval = setInterval(FetchData, 1000);

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
          maxTicksLimit: 20,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <MainHome style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h1>Gráfico de Temperatura e Umidade ao Vivo</h1>
        {loading ? (
          <p style={{ color: 'white' }}>Carregando gráfico...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <div style={{ width: '80%', height: '80vh', margin: '0 auto' }}>
            <Line data={data} options={options} />
          </div>
        )}
      </MainHome>
    </div>
  );
}

export default LiveGraph;
