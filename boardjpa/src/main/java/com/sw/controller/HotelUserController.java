package com.yunsu.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunsu.dto.UserDto;
import com.yunsu.entity.HotelUser;
import com.yunsu.service.HotelUserService;

@RestController
@RequestMapping("/api/users")
public class HotelUserController {

    private final HotelUserService hoteluserService;

    public HotelUserController(HotelUserService hoteluserService) {
        this.hoteluserService = hoteluserService;
    }

    @PostMapping("/signup")
    public ResponseEntity<HotelUser> signUp(@RequestBody UserDto userDto) {
        HotelUser saved = hoteluserService.register(userDto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    
    @GetMapping("/login")
    public String loginPage(String error, String logout, Model model) {
        if (error != null) {
            model.addAttribute("errorMsg", "아이디 또는 비밀번호가 올바르지 않습니다.");
        }
        if (logout != null) {
            model.addAttribute("msg", "로그아웃 되었습니다.");
        }
        return "login";
    }

    @GetMapping({"/", "/home"})
    public String home() {
        return "home";
    }
}