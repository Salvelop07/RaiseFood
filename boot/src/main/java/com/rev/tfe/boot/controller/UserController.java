package com.rev.tfe.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	ApplicationContext context;
	
	@Autowired
	UserService userService;

}
