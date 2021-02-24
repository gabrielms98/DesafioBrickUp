package com.rest.API.Models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private long _id;

    private String username;
    private String password;

    public User(String _username, String _password) {
        super();
        this.username = _username;
        this.password = _password;
    }

    public User() {
        super();
    }
}
