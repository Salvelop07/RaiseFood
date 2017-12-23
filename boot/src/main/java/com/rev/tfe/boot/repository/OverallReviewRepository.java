package com.rev.tfe.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.boot.domain.OverallReview;

@Repository
public interface OverallReviewRepository extends JpaRepository<OverallReview, Integer> {
//	public OverallReview findOverallReviewByTicketId(Integer tickId);
//	public OverallReview findOverallReviewByUserId(Integer userId);
//	public OverallReview findOverallReviewByUser(User u);
}
