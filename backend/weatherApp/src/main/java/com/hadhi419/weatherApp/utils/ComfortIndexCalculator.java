package com.hadhi419.weatherApp.utils;

public class ComfortIndexCalculator {

    public static double computeComfortIndex(double tempC, int humidity, double windSpeed) {
        // Ideal temperature = 22°C, humidity = 50%, wind = 3 m/s
        double tempScore = 100 - Math.abs(tempC - 22) * 3; // penalty 3 points per °C deviation
        double humidityScore = 100 - Math.abs(humidity - 50) * 1.2; // penalty 1.2 points per % deviation
        double windScore = 100 - Math.abs(windSpeed - 3) * 10; // penalty 10 points per m/s deviation

        double score = (tempScore + humidityScore + windScore) / 3;

        // Clamp 0-100
        if (score > 100) score = 100;
        if (score < 0) score = 0;

        return score;
    }
}