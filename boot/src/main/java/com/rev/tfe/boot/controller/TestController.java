package com.rev.tfe.boot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping("/")
	public String home() {
		return "In Project 2 ThrowsFoodException test controller";
	}
	
}
