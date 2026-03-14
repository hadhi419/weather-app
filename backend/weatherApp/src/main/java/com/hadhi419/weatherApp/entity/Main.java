package com.hadhi419.weatherApp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Main {
    @Getter
    @Setter
    private double temp;

    @Getter
    @Setter
    private double feels_like;

    @Getter
    @Setter
    private double temp_min;

    @Getter
    @Setter
    private double temp_max;

    @Getter
    @Setter
    private int pressure;

    @Getter
    @Setter
    private int humidity;

    @Getter
    @Setter
    private int sea_level;

    @Getter
    @Setter
    private int grnd_level;

}
