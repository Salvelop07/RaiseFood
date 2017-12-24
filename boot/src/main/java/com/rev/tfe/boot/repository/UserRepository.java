package com.rev.tfe.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.boot.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findUserByEmail(String email);
	public User findUserByUserName(String username);
	public User findUserByUserNameAndPassword(String username, String password);
}
