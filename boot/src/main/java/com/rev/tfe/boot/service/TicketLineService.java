package com.rev.tfe.boot.service;

import java.util.List;

import com.rev.tfe.boot.domain.TicketLine;

public interface TicketLineService {

	List<TicketLine> findAllByTicketId(Integer ticketId); 
}
