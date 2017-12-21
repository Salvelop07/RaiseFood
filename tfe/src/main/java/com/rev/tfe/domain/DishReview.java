package com.rev.tfe.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="DISH_REVIEW")
public class DishReview {
	
	@Id
	@Column(name="DISH_REVIEW_ID")
	@SequenceGenerator(allocationSize=1, name="DR_SEQ", sequenceName="DR_SEQ")
	@GeneratedValue(generator="DR_SEQ", strategy=GenerationType.SEQUENCE)
    private Integer id;
	
	@Column(name="DR_DESCRIPTION", nullable=true)
    private String description;
	
	@Column(name="DR_RATING", nullable=false)
    private Integer rating;
	
	@Column(name="DR_SUBMITTED", nullable=false)
    private String submitted;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="USER_ID", nullable=false)
    private User user;
	
	@Autowired
	@ManyToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name="DISH_ID", nullable=false)
    private Dish dish;
	
	public DishReview() {
		super();
	}
	public DishReview(String description, Integer rating, String submitted, User user, Dish dish) {
		super();
		this.description = description;
		this.rating = rating;
		this.submitted = submitted;
		this.user = user;
		this.dish = dish;
	}
	public DishReview(Integer id, String description, Integer rating, String submitted, User user, Dish dish) {
		super();
		this.id = id;
		this.description = description;
		this.rating = rating;
		this.submitted = submitted;
		this.user = user;
		this.dish = dish;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public String getSubmitted() {
		return submitted;
	}
	public void setSubmitted(String submitted) {
		this.submitted = submitted;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Dish getDish() {
		return dish;
	}
	public void setDish(Dish dish) {
		this.dish = dish;
	}
	@Override
	public String toString() {
		return "DishReview [id=" + id + ", description=" + description + ", rating=" + rating + ", submitted="
				+ submitted + "]";
	}    
}
