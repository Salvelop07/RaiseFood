package com.rev.tfe.boot.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.rev.tfe.boot.domain.User;

@Component
public class ValidateUserObj {
	
	@Autowired
	private User user;
	private String message;
	
	public ValidateUserObj() {
		super();
	}
	
	public ValidateUserObj(String message) {
		super();
		this.message = message;
	}
	
	public ValidateUserObj(User user, String message) {
		super();
		this.user = user;
		this.message = message;
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "ValidateUserObj [user=" + user + ", message=" + message + "]";
	}

}
