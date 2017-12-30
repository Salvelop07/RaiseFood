package com.rev.tfe.boot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.Dish;
import com.rev.tfe.boot.repository.DishRepository;
import com.rev.tfe.boot.repository.DishReviewRepository;

@Service
@Transactional
public class DishServiceImpl implements DishService{

	@Autowired
	private DishRepository dRepo;
	@Override
	public Dish addDish(Dish dish) {
		// TODO Auto-generated method stub
		dRepo.save(dish);
		return dish;
	}

	@Override
	public Dish findDishById(Integer id) {
		// TODO Auto-generated method stub
		return dRepo.findOne(id);
	}

	@Override
	public List<Dish> findAllDish() {
		// TODO Auto-generated method stub
		return dRepo.findAll();
	}

}
