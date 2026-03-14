package com.hadhi419.weatherApp.service;

import com.hadhi419.weatherApp.dto.CityWeatherDTO;
import com.hadhi419.weatherApp.entity.WeatherResponse;
import com.hadhi419.weatherApp.utils.ComfortIndexCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
@Service
@CacheConfig(cacheNames = {"weather"})
public class WeatherService {

    @Autowired
    private RestTemplate restTemplate;

    private final String apiKey = "b890ae9214e86c74485f3c46d3f1bc80";

    private final List<String> cityIds = List.of(
            "1248991",
            "1850147",
            "2644210",
            "2988507",
            "2147714",
            "4930956",
            "1796236",
            "3143244"
    );

    @Cacheable(unless="#result == null")
    public List<CityWeatherDTO> getAllCityWeather() {
        System.out.println("GetAllCityWeather is executing");
        List<CityWeatherDTO> results = new ArrayList<>();

        for (String cityId : cityIds) {

            String url = "https://api.openweathermap.org/data/2.5/weather?id="
                    + cityId + "&appid=" + apiKey + "&units=metric";

            try {
                WeatherResponse response =
                        restTemplate.getForObject(url, WeatherResponse.class);

                if (response == null) continue;

                double temp = response.getMain().getTemp();
                int humidity = response.getMain().getHumidity();
                double windSpeed = response.getWind().getSpeed();

                double comfortScore =
                        ComfortIndexCalculator.computeComfortIndex(temp, humidity, windSpeed);

                CityWeatherDTO dto = new CityWeatherDTO(
                        response.getName(),
                        response.getWeather().getFirst().getDescription(),
                        temp,
                        comfortScore
                );

                results.add(dto);

            } catch (Exception e) {
                System.out.println("Weather API failed for city " + cityId);
            }
        }

        // 🔹 Sort descending by comfortScore
        return results.stream()
                .sorted((a, b) -> Double.compare(b.getComfortScore(), a.getComfortScore()))
                .collect(Collectors.toList());
    }
}

//    // Optional: compute rankings for a list of cities
//    public List<CityWeatherDTO> getRankedCityWeather(List<String> cityIds) {
//        List<CityWeatherDTO> cityList = cityIds.stream()
//                .map(this::getCityWeather)
//                .filter(Objects::nonNull)
//                .collect(Collectors.toList());
//
//        cityList.sort((a, b) -> Double.compare(b.getComfortScore(), a.getComfortScore())); // descending
//
//        for (int i = 0; i < cityList.size(); i++) {
//            cityList.get(i).setRank(i + 1);
//        }
//
//        return cityList;
//    }

