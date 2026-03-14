    package com.hadhi419.weatherApp.config;

    import com.github.benmanes.caffeine.cache.Caffeine;
    import org.springframework.cache.CacheManager;
    import org.springframework.cache.caffeine.CaffeineCacheManager;
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;


    @Configuration
    public class CacheJavaConfig {
        @Bean
        public CacheManager cacheManager()
        {
          String specAsString = "initialCapacity=100,maximumSize=500,expireAfterAccess=5m,recordStats";
          CaffeineCacheManager cacheManager = new CaffeineCacheManager("weather");
          cacheManager.setCaffeine(Caffeine.from(specAsString));
          cacheManager.setAllowNullValues(false);
          return cacheManager;

        }

    }
