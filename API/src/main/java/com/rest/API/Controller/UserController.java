package com.rest.API.Controller;

import com.rest.API.Models.User;
import com.rest.API.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/users")
    public List<User> getAllNotes() {
        return usersRepository.findAll();
    }
}
