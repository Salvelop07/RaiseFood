package com.rev.tfe.boot.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="TICKET_LINE")
public class TicketLine {

	@Id
	@Column(name="TICKET_LINE_ID")
	@SequenceGenerator(allocationSize=1, name="TL_SEQ", sequenceName="TL_SEQ")
	@GeneratedValue(generator="TL_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer ticketLineId;

	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="TICKET_ID", nullable=false)
	private Ticket ticket;

	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="DISH_ID", nullable=false)
	private Dish dish;

	@Column(name="TICKET_LINE_QUANTITY", nullable=false)
	private Integer quantity;

	public TicketLine() {
		super();
	}

	public TicketLine(Ticket ticket, Dish dish, Integer quantity) {
		super();
		this.ticket = ticket;
		this.dish = dish;
		this.quantity = quantity;
	}

	public TicketLine(Integer ticketLineId, Ticket ticket, Dish dish, Integer quantity) {
		super();
		this.ticketLineId = ticketLineId;
		this.ticket = ticket;
		this.dish = dish;
		this.quantity = quantity;
	}

	public Integer getTicketLineId() {
		return ticketLineId;
	}

	public void setTicketLineId(Integer ticketLineId) {
		this.ticketLineId = ticketLineId;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}

	public Dish getDish() {
		return dish;
	}

	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "TicketLine [ticketLineId=" + ticketLineId + ", ticket=" + ticket + ", dish=" + dish + ", quantity="
				+ quantity + "]";
	}
}

