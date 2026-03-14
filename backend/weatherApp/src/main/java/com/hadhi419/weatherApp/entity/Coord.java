package com.hadhi419.weatherApp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
public class Coord {

    @Getter
    @Setter
    private double lon;

    @Getter
    @Setter
    private double lat;
}
