package com.rev.tfe.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.boot.domain.Ticket;
import com.rev.tfe.boot.repository.TicketRepository;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepository ticketRepo;
	
	@Override
	public List<Ticket> findAllTickets() {
		return ticketRepo.findAll();
	}
	
	@Override
	public List<Ticket> findAllByUserId(Integer userId) {
		return ticketRepo.findAllByUserId(userId);
	}

	@Override
	public Ticket addTicket(Ticket ticket) {
		return ticketRepo.save(ticket);
	}
}
