package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.Dish;

public interface DishService {
	public Dish addDish(Dish dish);
	public Dish findDishById(Integer id);
	public List<Dish> findAllDish();
}
