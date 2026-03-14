package com.hadhi419.weatherApp.security;

import java.util.List;

public class WhitelistService {

    private static final List<String> ALLOWED_USERS = List.of(
            "arceers@fidenz.com",
            "other@company.com",
            "321mohomedhadhi@gmail.com",
            "dev.hadhi419@gmail.com"
    );

    public static boolean isAllowed(String email) {
        return ALLOWED_USERS.contains(email);
    }
}