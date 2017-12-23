package com.rev.tfe.boot.domain;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="TYPE")
public class Type {
	
	@Id
	@Column(name="TYPE_ID")
	@SequenceGenerator(allocationSize=1, name="D_SEQ", sequenceName="D_SEQ")
	@GeneratedValue(generator="D_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="TYPE_NAME", nullable=false, unique=true)
	private String type;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="DISH_TYPE",
	joinColumns=@JoinColumn(name="TYPE_ID"),
	inverseJoinColumns=@JoinColumn(name="DISH_ID"))
	private Set<Dish> dishes;

	public Type() {
		super();
	}

	public Type(String type) {
		super();
		this.type = type;
	}

	public Type(Integer id, String type) {
		super();
		this.id = id;
		this.type = type;
	}

	public void setDishes(Set<Dish> dishes) {
		this.dishes = dishes;
	}

	public Type(Integer id, String type, Set<Dish> dishes) {
		super();
		this.id = id;
		this.type = type;
		this.dishes = dishes;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public Type(String type, Set<Dish> dishes) {
		super();
		this.type = type;
		this.dishes = dishes;
	}

	public Set<Dish> getDishes() {
		return dishes;
	}

	@Override
	public String toString() {
		return "Type [id=" + id + ", type=" + type + ", dishes=" + dishes + "]";
	}
}
