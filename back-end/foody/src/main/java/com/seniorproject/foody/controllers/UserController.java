package com.seniorproject.foody.controllers;

import com.seniorproject.foody.entities.AppUser;
import com.seniorproject.foody.entities.Restaurant;
import com.seniorproject.foody.entities.RestaurantVisit;
import com.seniorproject.foody.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v2/user")
@PropertySource("application.properties")
public class UserController {
    @Autowired
    AppUserService appUserService;
    // this class is used to control our restaurant
    @PostMapping("/visit")
    public String logVisit(@RequestHeader("Authorization") String sessionId, @RequestBody String restaurantId){



        appUserService.logVisit(sessionId,restaurantId);
        return "ok";
    }
    @GetMapping("/visted")
}
