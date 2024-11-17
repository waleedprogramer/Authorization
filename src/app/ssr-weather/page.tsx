import { FaThermometerHalf, FaWind } from 'react-icons/fa';
import Navbar from "../components/Navbar";


const SSGWeather = async () => {
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=24.8607&longitude=67.0011&current_weather=true',

    { cache: 'no-store' } 
  );
  const data = await res.json();

  const { temperature, windspeed } = data.current_weather;

  return (
    <> 
    <Navbar/>
    <div className="min-h-[600px] flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">SSR Weather (Pakistan, Karachi)</h1>
      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
        <p className='flex'>
        <FaThermometerHalf className="text-blue-300 text-3xl" />
        <span className="text-lg ">Temperature: {temperature}°C</span> </p>
        <p className="flex mt-4">
        <FaWind className="text-blue-300 text-3xl" />
        <span className="text-lg ">
         Wind Speed: {windspeed} km/h
        </span>  
        </p>
      </div>
    </div>
    </>
  );
};

export default SSGWeather;
