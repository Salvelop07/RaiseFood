package com.rev.tfe.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.domain.Dish;

@Repository
public interface DishRepo extends JpaRepository<Dish, Integer>{

	

}
