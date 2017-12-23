package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.OverallReview;

public interface OverallReviewService {
	public void addOverallReview(OverallReview or);
	public List<OverallReview> findAllOverallReviews();
	public OverallReview findOverallReview(Integer orId);
//	public OverallReview findOverallReviewByTicketId(Integer tickId);
//	public OverallReview findOverallReviewByUserId(Integer userId);
//	public OverallReview findOverallReviewByUser(User u);
}
