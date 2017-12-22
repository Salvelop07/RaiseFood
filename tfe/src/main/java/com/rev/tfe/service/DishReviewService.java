package com.rev.tfe.service;

import java.util.List;

import com.rev.tfe.domain.DishReview;
import com.rev.tfe.domain.User;

public interface DishReviewService {
	public void addDishReview(DishReview dr);
	public DishReview findDishReviewById(Integer dishId);
	public DishReview findDishReviewByUser(User u);
	public List<DishReview> getAllDishReviews();
}
