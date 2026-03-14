package com.hadhi419.weatherApp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class Weather {

    @Getter
    @Setter
    private int id;

    @Getter
    @Setter
    private String main;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private String icon;

}