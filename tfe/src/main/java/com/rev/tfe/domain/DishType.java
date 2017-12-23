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
@Table(name="DISH_TYPE")
public class DishType {

	@Id
	@Column(name="DISH_TYPE_ID")
	@SequenceGenerator(allocationSize=1, name="DT_SEQ", sequenceName="DT_SEQ")
	@GeneratedValue(generator="DT_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="DISH_ID", nullable=false)
	private Dish dish;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="TYPE_ID", nullable=false)
	private Type type;
	
	public DishType() {
		super();
	}

	public DishType(Dish dish, Type type) {
		super();
		this.dish = dish;
		this.type = type;
	}

	public DishType(Integer id, Dish dish, Type type) {
		super();
		this.id = id;
		this.dish = dish;
		this.type = type;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Dish getDish() {
		return dish;
	}

	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "DishType [id=" + id + ", dish=" + dish + "]";
	}

}
