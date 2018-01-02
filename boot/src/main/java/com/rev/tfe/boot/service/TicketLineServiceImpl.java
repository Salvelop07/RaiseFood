package com.rev.tfe.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rev.tfe.boot.domain.TicketLine;
import com.rev.tfe.boot.repository.TicketLineRepository;

@Service
@Transactional
public class TicketLineServiceImpl implements TicketLineService {

	@Autowired
	private TicketLineRepository ticketLineRepo;
	
	@Override
	public List<TicketLine> findAllByTicketId(Integer ticketId) {
		return ticketLineRepo.findAllByTicketTicketId(ticketId);
	}

	@Override
	public TicketLine addTicketLine(TicketLine ticketLine) {
		return ticketLineRepo.save(ticketLine);
	}
}
