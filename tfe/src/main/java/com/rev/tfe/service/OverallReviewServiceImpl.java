package com.rev.tfe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.dao.OverallReviewRepository;
import com.rev.tfe.domain.OverallReview;
import com.rev.tfe.domain.User;

@Component
@Service
@Transactional
public class OverallReviewServiceImpl implements OverallReviewService {
	
	@Autowired
	private OverallReviewRepository orRepo;

	public void addOverallReview(OverallReview or) {
		// TODO Auto-generated method stub
		orRepo.save(or);
	}

	public List<OverallReview> findAllOverallReviews() {
		return orRepo.findAll();
	}

	public OverallReview findOverallReview(Integer orId) {
		if (orId == null) return null;
		return orRepo.getOne(orId);
	}

//	public OverallReview findOverallReviewByTicketId(Integer tickId) {
//		return orRepo.findOverallReviewByTicketId(tickId);
//	}
//
//	public OverallReview findOverallReviewByUserId(Integer userId) {
//		return orRepo.findOverallReviewByUserId(userId);
//	}
//	
//	public OverallReview findOverallReviewByUser(User u) {
//		return orRepo.findOverallReviewByUser(u);
//	}

}
