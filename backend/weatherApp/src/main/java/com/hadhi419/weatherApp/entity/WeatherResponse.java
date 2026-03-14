package com.hadhi419.weatherApp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

// Root class
@NoArgsConstructor
@AllArgsConstructor
public class WeatherResponse {
    @Getter
    @Setter
    private Coord coord;

    @Getter
    @Setter
    private List<Weather> weather;

    @Getter
    @Setter
    private String base;

    @Getter
    @Setter
    private Main main;


    @Getter
    @Setter
    private int visibility;

    @Getter
    @Setter
    private Wind wind;

    @Getter
    @Setter
    private Clouds clouds;

    @Getter
    @Setter
    private long dt;

    @Getter
    @Setter
    private Sys sys;

    @Getter
    @Setter
    private int timezone;

    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private int cod;

}
