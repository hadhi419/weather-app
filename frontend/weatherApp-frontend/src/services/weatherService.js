import axios from "axios";

const API_URL = "http://localhost:8080/api/weather";

export const getWeather = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Weather fetch failed:", error);
    throw new Error("Weather service unavailable");
  }
};
