package com.rev.tfe.beantest;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.rev.tfe.domain.Dish;
import com.rev.tfe.domain.DishReview;
import com.rev.tfe.domain.User;
import com.rev.tfe.service.DishReviewService;

public class BeanTest {
	
	public static void main(String[] args) {
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("beans.xml");
		
		User user = new User("test", "test", "test", "test", "test", 1);
		Dish dish = new Dish("lasagna", 5.44, "it's food");
		DishReview dr = new DishReview("description", 5, "midnight", user, dish);
		
		DishReviewService drService = context.getBean(DishReviewService.class);
		drService.addDishReview(dr);
	}
}
