package com.hadhi419.weatherApp.controller;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/api/me")
    public Object me(Authentication authentication) {

        if (authentication == null) {
            return Map.of("loggedIn", false);
        }
        return Map.of(
                "loggedIn", true,
                "name", authentication.getName()
        );
    }
}