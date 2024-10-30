
const initialPosition = [-23.5638747581, -46.6525585947];

export const geoPosition = (setPosition, setError) => {
  try {
    const latitudeOffset = (Math.random() - 0.5) * 0.0001;
    const longitudeOffset = (Math.random() - 0.5) * 0.0001;

    const newLatitude = parseFloat((initialPosition[0] + latitudeOffset).toFixed(10));
    const newLongitude = parseFloat((initialPosition[1] + longitudeOffset).toFixed(10));

    const newPosition = [newLatitude, newLongitude];
    setPosition(newPosition);
    setError(null);
  } catch (err) {
    setError("Rastreador desativado: " + err.message);
  }
};




export const enviormentData = async (setTemperatureData, setHumidityData, setLabels) => {
    try {
      const temperature = (20 + Math.random() * 10).toFixed(1);
      const humidity = (40 + Math.random() * 20).toFixed(1);
      const timestamp = new Date().toLocaleTimeString();
  
      setTemperatureData((prevData) => [...prevData, temperature].slice(-20));
      setHumidityData((prevData) => [...prevData, humidity].slice(-20));
      setLabels((prevLabels) => [...prevLabels, timestamp].slice(-20));
  
    } catch (err) {
      console.error('Erro ao buscar os dados:', err);
      throw new Error("Erro ao buscar dados: " + err.message);
    }
  };