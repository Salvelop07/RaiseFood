package com.rev.tfe.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rev.tfe.boot.domain.Dish;

public interface DishRepository extends JpaRepository<Dish, Integer>{
	public Dish findDishById(Integer userId);
}
