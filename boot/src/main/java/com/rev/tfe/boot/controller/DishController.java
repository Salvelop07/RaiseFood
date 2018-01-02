package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.Dish;
import com.rev.tfe.boot.service.DishService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/dish")
public class DishController {
	
	@Autowired
	private DishService dService;
	
	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Dish> findAll() {
		return dService.findAllDish();
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Dish findDishesById(@PathVariable int id) {
		return dService.findDishById(id);
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public void addDish(@RequestBody Dish dish) {
		dService.addDish(dish);
	}
}
