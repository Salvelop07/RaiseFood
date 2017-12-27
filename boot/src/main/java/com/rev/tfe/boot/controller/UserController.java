package com.rev.tfe.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.User;
import com.rev.tfe.boot.service.UserService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	ApplicationContext context;
	
	@Autowired
	UserService userService;
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public User updateUser(@RequestBody User u) {
		return userService.updateUser(u);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public User getUser(@PathVariable int id) {
		return userService.findUserById(id);
	}
	
	@RequestMapping(value="/byUsername", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public User getUserByUsername(@RequestBody User u) {
		return userService.findUserByUserName(u.getUserName());
	}
	
	@RequestMapping(value="/byEmail", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public User getUserByEmail(@RequestBody User u) {
		return userService.findUserByEmail(u.getEmail());
	}
	
	@RequestMapping(value="/verify", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public User getUserByUsernameAndPassword(@PathVariable User u) {
		return userService.findUserByUserNameAndPassword(u.getUserName(), u.getPassword());
	}

}
