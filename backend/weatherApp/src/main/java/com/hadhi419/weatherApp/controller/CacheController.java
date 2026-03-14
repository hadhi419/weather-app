package com.hadhi419.weatherApp.controller;

import com.github.benmanes.caffeine.cache.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CacheController {

    @Autowired
    private CacheManager cacheManager;

    @GetMapping("/cache/weather")
    public Map<Object, Object> getCache() {

        org.springframework.cache.Cache springCache = cacheManager.getCache("weather");

        Cache<Object, Object> nativeCache =
                (Cache<Object, Object>) springCache.getNativeCache();

        return nativeCache.asMap();
    }
}