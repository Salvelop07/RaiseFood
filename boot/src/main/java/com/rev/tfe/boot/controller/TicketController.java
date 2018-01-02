package com.rev.tfe.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rev.tfe.boot.domain.Ticket;
import com.rev.tfe.boot.service.TicketService;

@RestController
@RequestMapping("/ticket")
@CrossOrigin(origins="http://localhost:4200")
public class TicketController {

	@Autowired
	private TicketService ticketService;
	
	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Ticket> findAll() {
		return ticketService.findAllTickets();
	}
	
	@RequestMapping(value="/{userId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Ticket> findAllTicketByUserId(@PathVariable int userId) {
		return ticketService.findAllByUserId(userId);
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public Ticket addDish(@RequestBody Ticket ticket) {
		return ticketService.addTicket(ticket);
	}
}
