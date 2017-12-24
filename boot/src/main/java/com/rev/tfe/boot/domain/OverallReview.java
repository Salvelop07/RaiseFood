package com.rev.tfe.boot.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="OVERALL_REVIEW")
public class OverallReview {
	
	@Id
	@Column(name="OVERALL_REVIEW_ID")
	@SequenceGenerator(allocationSize=1, name="OR_SEQ", sequenceName="OR_SEQ")
	@GeneratedValue(generator="OR_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="FOOD_SCORE", nullable=true)
	private Integer foodScore;
	
	@Column(name="SERVICE_SCORE", nullable=true)
	private Integer serviceScore;
	
	@Column(name="OVERALL_REVIEW_DESCRIPTION", nullable=true)
	private String description;
	
	@Autowired
	@OneToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name="TICKET_ID", nullable=false, unique=true)
	private Ticket ticket;

	public OverallReview() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OverallReview(Integer foodScore, Integer serviceScore, String description, Ticket ticket) {
		super();
		this.foodScore = foodScore;
		this.serviceScore = serviceScore;
		this.description = description;
		this.ticket = ticket;
	}

	public OverallReview(Integer id, Integer foodScore, Integer serviceScore, String description, Ticket ticket) {
		super();
		this.id = id;
		this.foodScore = foodScore;
		this.serviceScore = serviceScore;
		this.description = description;
		this.ticket = ticket;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getFoodScore() {
		return foodScore;
	}

	public void setFoodScore(Integer foodScore) {
		this.foodScore = foodScore;
	}

	public Integer getServiceScore() {
		return serviceScore;
	}

	public void setServiceScore(Integer serviceScore) {
		this.serviceScore = serviceScore;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}

	@Override
	public String toString() {
		return "OverallReview [id=" + id + ", foodScore=" + foodScore + ", serviceScore=" + serviceScore
				+ ", description=" + description + ", ticket=" + ticket + "]";
	}
}
