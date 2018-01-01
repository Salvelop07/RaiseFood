package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.TicketLine;
import com.rev.tfe.boot.service.TicketLineService;

@RestController
@RequestMapping("/ticketline")
@CrossOrigin(origins="http://localhost:4200")
public class TicketLineController {

	@Autowired
	private TicketLineService ticketLineService;
	
	@RequestMapping(value="/{ticketId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<TicketLine> findAllTicketLineByTicketId(@PathVariable int ticketId) {
		return ticketLineService.findAllByTicketId(ticketId);
	}
}
