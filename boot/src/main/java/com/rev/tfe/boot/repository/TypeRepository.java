package com.rev.tfe.boot.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rev.tfe.boot.domain.Dish;
import com.rev.tfe.boot.domain.Type;

public interface TypeRepository extends JpaRepository<Type, Integer>{
//	public List<Type> findAllByDishesIn(Dish dishes);
}
