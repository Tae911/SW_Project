package com.sw.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserInfoController {

    @GetMapping("/userinfo")
    public ResponseEntity<Map<String, String>> userinfo(Authentication auth) {
        Map<String,String> result = new HashMap<>();
        // 인증된 사용자라면
        if (auth != null
            && auth.isAuthenticated()
            && !(auth instanceof AnonymousAuthenticationToken)) {
            result.put("authenticated", "true");
            result.put("username", auth.getName());  // 로그인 ID 반환
        } else {
            result.put("authenticated", "false");
        }
        return ResponseEntity.ok(result);
    }
}
