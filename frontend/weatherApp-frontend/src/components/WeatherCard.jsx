export default function WeatherCard({ city }) {
  return (
    <div
      className="w-64 mx-auto p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105
                    bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 relative"
    >
      <div
        className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center rounded-full 
                   bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-gray-900 font-bold text-lg shadow-lg"
      >
        {city.rank}
      </div>

      <h2
        className="text-xl sm:text-2xl font-bold text-center mb-3
                   text-gray-800 dark:text-yellow-400"
      >
        {city.cityName}
      </h2>

      <div className="flex items-center justify-center space-x-4 mb-3">
        <span className="text-4xl">
          {city.weatherDescription.includes("cloud")
            ? "☁️"
            : city.weatherDescription.includes("rain")
              ? "🌧️"
              : city.weatherDescription.includes("snow")
                ? "❄️"
                : "☀️"}
        </span>
        <span className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {city.temperature}°C
        </span>
      </div>

      <p className="text-center mb-4 capitalize text-gray-600 dark:text-gray-300">
        {city.weatherDescription}
      </p>

      <div
        className="text-center py-2 rounded-lg font-medium 
             bg-gradient-to-br from-blue-700 to-blue-900 
             dark:from-blue-900 dark:to-blue-700 
             text-white shadow-lg"
      >
        Comfort Score: <strong>{city.comfortScore.toFixed(1)}</strong>
      </div>
    </div>
  );
}
