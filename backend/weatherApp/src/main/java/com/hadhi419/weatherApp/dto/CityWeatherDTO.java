package com.hadhi419.weatherApp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class CityWeatherDTO {

    @Getter
    @Setter
    private String cityName;

    @Getter
    @Setter
    private String weatherDescription;

    @Getter
    @Setter
    private double temperature; // in Fahrenheit

    @Getter
    @Setter
    private double comfortScore; // 0-100


}
