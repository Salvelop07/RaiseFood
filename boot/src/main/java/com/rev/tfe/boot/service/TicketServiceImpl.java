package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.Ticket;
import com.rev.tfe.boot.repository.TicketRepository;

public class TicketServiceImpl implements TicketService {

	private TicketRepository ticketRepo;
	
	@Override
	public List<Ticket> findAllByUserId(Integer userId) {
		return ticketRepo.findAllByUserId(userId);
	}
}
