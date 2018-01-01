package com.rev.tfe.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.tfe.boot.domain.TicketLine;

@Repository
public interface TicketLineRepository extends JpaRepository<TicketLine, Integer> {
	
	List<TicketLine> findAllByTicketTicketId(Integer ticketId);

}
