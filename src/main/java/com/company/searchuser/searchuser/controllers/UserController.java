package com.company.searchuser.searchuser.controllers;


import com.company.searchuser.searchuser.models.UserModel;
import com.company.searchuser.searchuser.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/createUser")
    @ResponseBody
    public UserModel post(@RequestBody UserModel userModel) {
        return userService.post(userModel);
    }

    @GetMapping("/listUsers")
    @ResponseBody
    public List<UserModel> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public UserModel getById(@PathVariable("id") Long id) {
        return userService.getById(id);
    }

    @PutMapping("/update/{id}")
    @ResponseBody
    public UserModel put(@PathVariable("id") Long id, @RequestBody UserModel userModel) {
        return userService.put(id, userModel);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
        return userService.delete(id);
    }
}
