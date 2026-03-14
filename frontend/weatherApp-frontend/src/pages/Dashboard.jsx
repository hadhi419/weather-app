import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
import WeatherCard from "../components/WeatherCard";
import NavBar from "../components/NavBar";
import ComfortChart from "../components/ComfortChart";

import { checkAuth, login, logout } from "../services/authService";

function Dashboard() {
  const [weather, setWeather] = useState([]);
  const [sortedWeather, setSortedWeather] = useState([]);
  const [graphType, setGraphType] = useState(null);
  const [sortMethod, setSortMethod] = useState("comfort-desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth().then((data) => {
      setLoggedIn(data.loggedIn);
      setUser(data.name);
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    getWeather()
      .then((data) => {
        const rankedData = assignRanks(data);
        console.log("Ranked Weather Data:", rankedData);
        setWeather(rankedData);
        setSortedWeather(sortData(rankedData, sortMethod));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setSortedWeather(sortData(weather, sortMethod));
  }, [sortMethod, weather]);

  const sortData = (data, method) => {
    if (!data) return [];
    const sorted = [...data];
    switch (method) {
      case "comfort-desc":
        sorted.sort((a, b) => b.comfortScore - a.comfortScore);
        break;
      case "comfort-asc":
        sorted.sort((a, b) => a.comfortScore - b.comfortScore);
        break;
      case "temperature-desc":
        sorted.sort((a, b) => b.temperature - a.temperature);
        break;
      case "temperature-asc":
        sorted.sort((a, b) => a.temperature - b.temperature);
        break;
      default:
        break;
    }
    return sorted;
  };

  const assignRanks = (data, key = "comfortScore") => {
    const sorted = [...data].sort((a, b) => b[key] - a[key]);

    return sorted.map((city, index) => ({
      ...city,
      rank: index + 1,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-blue-50 dark:bg-gray-900 transition-colors duration-500">
      {" "}
      <NavBar
        loggedIn={loggedIn}
        onLogout={() => logout().then(() => setLoggedIn(false))}
      />
      <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4 sm:gap-5 px-4">
        <button
          onClick={() => setGraphType("comfort")}
          className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3
               bg-transparent border border-blue-600 text-blue-600 rounded-lg
               hover:bg-blue-600 hover:text-white transition text-center"
        >
          View Comfort Graph
        </button>

        <button
          onClick={() => setGraphType("temperature")}
          className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3
               bg-transparent border border-green-600 text-green-600 rounded-lg
               hover:bg-green-600 hover:text-white transition text-center"
        >
          View Temperature Graph
        </button>
      </div>
      <div className="flex justify-end mt-6 px-6">
        <div className="w-full sm:w-auto">
          <select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="w-full sm:w-44 md:w-48 lg:w-52 px-3 lg:mr-12 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none"
          >
            <option value="comfort-desc">Comfort ↓</option>
            <option value="comfort-asc">Comfort ↑</option>
            <option value="temperature-desc">Temperature ↓</option>
            <option value="temperature-asc">Temperature ↑</option>
          </select>
        </div>
      </div>
      <div className="mt-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <div className="w-5 h-7 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          sortedWeather.map((city, index) => (
            <WeatherCard key={index} city={city} />
          ))
        )}
      </div>
      {error && (
        <div className="text-gray-500 text-center mt-6">
          Weather service unavailable
          {!loggedIn && (
            <div className="mt-4">
              <button
                onClick={login}
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg 
             hover:bg-blue-500 hover:text-white 
             transition duration-200"
              >
                Login to Continue
              </button>
            </div>
          )}
        </div>
      )}
      {graphType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 w-11/12 max-w-4xl p-6 rounded-2xl shadow-lg">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setGraphType(null)}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>

            {graphType === "comfort" && (
              <ComfortChart
                data={weather}
                dataKey="comfortScore"
                title="Comfort Index by City"
              />
            )}
            {graphType === "temperature" && (
              <ComfortChart
                data={weather}
                dataKey="temperature"
                title="Temperature by City"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
