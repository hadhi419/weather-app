package com.hadhi419.weatherApp.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Sys {

    @Getter
    @Setter
    private String country;

    @Getter
    @Setter
    private long sunrise;

    @Getter
    @Setter
    private long sunset;
}