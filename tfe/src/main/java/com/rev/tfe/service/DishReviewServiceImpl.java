package com.rev.tfe.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.tfe.dao.DishReviewRepository;
import com.rev.tfe.domain.DishReview;
import com.rev.tfe.domain.User;

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
	
	public DishReview findDishReviewByUser(User u) {
		return drRepo.findDishReviewByUser(u);
	}

	public List<DishReview> getAllDishReviews() {
		return drRepo.findAll();
	}


}
