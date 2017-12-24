package com.rev.tfe.boot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.User;
import com.rev.tfe.boot.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	ApplicationContext context;
	
	@Autowired
	UserRepository userRepo;

	@Override
	public User addUser(User u) {
		User user = userRepo.save(u);
		return user;
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
