package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.Ticket;

public interface TicketService {
	
	List<Ticket> findAllByUserId(Integer userId);

}
