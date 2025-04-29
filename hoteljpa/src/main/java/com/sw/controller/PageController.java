package com.sw.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.sw.dto.UserDto;
import com.sw.entity.HotelUser;
import com.sw.service.HotelUserService;

@Controller
public class PageController {

    private final HotelUserService hotelUserService;

    public PageController(HotelUserService hotelUserService) {
        this.hotelUserService = hotelUserService;
    }

    // ──────────────────────────────────────
    // 1) 홈 / 첫 페이지 (인증 없이 접근 가능)
    @GetMapping({"/", "/firstpage"})
    public String firstPage() {
        return "firstPage";  // templates/firstPage.html
    }

    // ──────────────────────────────────────
    // 2) 회원가입 폼 (인증 없이 접근 가능)
    @GetMapping("/signupPage")
    public String signupForm(Model model) {
        model.addAttribute("userDto", new UserDto());
        return "signupPage"; // templates/signupPage.html
    }

    // 3) 회원가입 처리 (POST)
    @PostMapping("/signup")
    public String signupSubmit(@ModelAttribute UserDto userDto) {
        hotelUserService.register(userDto);
        return "redirect:/firstpage";
    }

    // ──────────────────────────────────────
    // 4) 로그인 폼 (인증 없이 접근 가능)
    @GetMapping("/login")
    public String loginForm() {
        return "loginPage";  // templates/loginPage.html
    }
    
    /*@GetMapping({"/myPage"})
    public String myPage() {
        return "myPage";  // templates/myPage.html
    }*/
    
    @GetMapping("/myPage")
    public String myPage(Model model, @AuthenticationPrincipal UserDetails ud) {
        HotelUser user = hotelUserService.findByLoginId(ud.getUsername());
        model.addAttribute("user", user);
        return "myPage";
    }
}