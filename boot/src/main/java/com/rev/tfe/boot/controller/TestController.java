package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.DishReview;
import com.rev.tfe.boot.service.DishReviewService;

@RestController
@RequestMapping("/api/dishreview")
public class TestController {
	
	@Autowired
	static DishReviewService drService;

//	public String home() {
//		return "In Project 2 RaiseFood test controller";
//	}
	@RequestMapping(method=RequestMethod.POST)
	public void addDishReview(@RequestBody DishReview dr) {
		drService.addDishReview(dr);
	}

	@RequestMapping(method=RequestMethod.GET)
	public List<DishReview> findAllDishReviews() {
		return drService.findAllDishReviews();
	}
	
	
}
