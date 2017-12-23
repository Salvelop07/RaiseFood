package com.rev.tfe.boot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.tfe.boot.domain.DishReview;
import com.rev.tfe.boot.repository.DishReviewRepository;

@Service
@Transactional
public class DishReviewServiceImpl implements DishReviewService {

	@Autowired
	private DishReviewRepository drRepo;
	
	public void addDishReview(DishReview dr) {
		drRepo.save(dr);
	}

	public DishReview findDishReviewById(Integer dishId) {
		if (dishId == null) return null;
		return drRepo.getOne(dishId);
	}
	
	public DishReview findDishReviewByUserId(Integer userId) {
		return drRepo.findDishReviewByUserId(userId);
	}

	public List<DishReview> findAllDishReviews() {
		return drRepo.findAll();
	}


}
