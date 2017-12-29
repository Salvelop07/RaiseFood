package com.rev.tfe.boot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.User;
import com.rev.tfe.boot.dto.ValidateUserObj;
import com.rev.tfe.boot.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	ApplicationContext context;

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	ValidateUserObj validator;

	@Override
	public ValidateUserObj updateUser(User u) {
		User user = null;
		String message = null;
		if (u.getId() == null) { // new account
			if (findUserByUserName(u.getUserName()) != null)
				message = "An account with that username exists";
			if (findUserByEmail(u.getEmail()) != null) {
				message = "An account with that email exists";
			}
		} else {
			if (!findUserByUserName(u.getUserName()).getId().equals(u.getId())) {
				message = "This username is taken";
			}
			if (!findUserByEmail(u.getEmail()).getId().equals(u.getId())) {
				message = "This email is taken";
			}
		}
		if (message == null)
			user = userRepo.save(u);
		validator.setUser(user);
		validator.setMessage(message);
		return validator;
	}

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User findUserById(Integer id) {
		return userRepo.findOne(id);
	}

	@Override
	public User findUserByEmail(String email) {
		return userRepo.findUserByEmail(email);
	}

	@Override
	public User findUserByUserName(String username) {
		return userRepo.findUserByUserName(username);
	}

	@Override
	public User findUserByUserNameAndPassword(String username, String password) {
		return userRepo.findUserByUserNameAndPassword(username, password);
	}

}
