package com.hadhi419.weatherApp.controller;

import com.hadhi419.weatherApp.dto.CityWeatherDTO;
import com.hadhi419.weatherApp.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public List<CityWeatherDTO> getWeather() {

        return weatherService.getAllCityWeather();
    }

    
}
