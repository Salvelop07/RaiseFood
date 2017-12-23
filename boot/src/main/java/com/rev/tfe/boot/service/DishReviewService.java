package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.DishReview;

public interface DishReviewService {
	public void addDishReview(DishReview dr);
	public DishReview findDishReviewById(Integer dishId);
	public DishReview findDishReviewByUserId(Integer userId);
	public List<DishReview> findAllDishReviews();
}
