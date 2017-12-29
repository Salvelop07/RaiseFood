package com.rev.tfe.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rev.tfe.boot.domain.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
	
	List<Ticket> findAllByUserId(Integer userId);
}
