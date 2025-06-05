package com.demospring.controller;

import com.demospring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class HomeController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/{id}")
    public String getUser(@PathVariable Long id) {
        userService.getUserById(id); // Gọi phương thức getUserById
        return ("index");
    }
}