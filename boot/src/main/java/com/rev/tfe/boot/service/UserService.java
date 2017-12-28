package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.User;
import com.rev.tfe.boot.dto.ValidateUserObj;

public interface UserService {
	
	public ValidateUserObj updateUser(User u);
	public List<User> findAllUsers();
	public User findUserById(Integer id);
	public User findUserByEmail(String email);
	public User findUserByUserName(String username);
	public User findUserByUserNameAndPassword(String username, String password);

}
