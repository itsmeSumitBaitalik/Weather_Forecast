import { useState } from 'react';

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const key = import.meta.env.VITE_API_KEY; // Access the API key

  const handleInputs = (e) => {
    setSearch(e.target.value);
  };

  const Api_call = async () => {
    if (search === "") {
      alert("Please enter a city name");
      return;
    }

    try {
      const uri = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`
      );
      const jsonData = await uri.json();

      if (jsonData.cod !== 200) {
        setError(jsonData.message);
        setData(null);
      } else {
        setData(jsonData);
        console.log(jsonData);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  const getWeatherImage = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">Weather Dashboard</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputs}
            value={search}
          />
          <button
            onClick={Api_call}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {error && <div className="text-red-500 text-center">{error}</div>}

        {data && data.weather && (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg text-center space-y-2">
            <h2 className="text-xl font-semibold text-blue-700">{data.name}</h2>
            <div className="flex justify-center">
              <img
                src={getWeatherImage(data.weather[0].icon)}
                alt={data.weather[0].description}
                className="w-28 h-28 bg-black border rounded-lg"
              />
            </div>
            <p className="text-gray-600 capitalize">{data.weather[0].description}</p>
            <div className="flex justify-around text-gray-700">
              <div>
                <p className="text-sm">Temp</p>
                <p className="font-bold">{Math.trunc(data.main.temp)}°C</p>
              </div>
              <div>
                <p className="text-sm">Humidity</p>
                <p className="font-bold">{data.main.humidity}%</p>
              </div>
              <div>
                <p className="text-sm">Wind</p>
                <p className="font-bold">{data.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;