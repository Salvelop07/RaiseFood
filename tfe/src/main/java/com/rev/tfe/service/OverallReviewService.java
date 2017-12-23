package com.rev.tfe.service;

import java.util.List;

import com.rev.tfe.domain.OverallReview;
import com.rev.tfe.domain.User;

public interface OverallReviewService {
	public void addOverallReview(OverallReview or);
	public List<OverallReview> findAllOverallReviews();
	public OverallReview findOverallReview(Integer orId);
//	public OverallReview findOverallReviewByTicketId(Integer tickId);
//	public OverallReview findOverallReviewByUserId(Integer userId);
//	public OverallReview findOverallReviewByUser(User u);
}
