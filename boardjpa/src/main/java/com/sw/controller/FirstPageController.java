package com.sw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstPageController {

    @GetMapping("/firstpage")
    public String firstPage() {
        return "FirstPage";
    }
    
}