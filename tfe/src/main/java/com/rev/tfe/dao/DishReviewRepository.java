package com.rev.tfe.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.domain.DishReview;
import com.rev.tfe.domain.User;

@Repository
public interface DishReviewRepository extends JpaRepository<DishReview, Integer> {
	public DishReview findDishReviewByUser(User u);
}
