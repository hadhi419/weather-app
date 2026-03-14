package com.hadhi419.weatherApp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Wind {

    @Getter
    @Setter
    private double speed;

    @Getter
    @Setter
    private int deg;

    @Getter
    @Setter
    private double gust;

}