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
	private Integer ticketId;

	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="DISH_ID")
	private Integer dishId;

	@Column(name="TICKET_LINE_QUANTITY")
	private Integer quantity;

	public TicketLine() {
		super();
	}

	public TicketLine(Integer ticketId, Integer dishId, Integer quantity) {
		super();
		this.ticketId = ticketId;
		this.dishId = dishId;
		this.quantity = quantity;
	}

	public TicketLine(Integer ticketLineId, Integer ticketId, Integer dishId, Integer quantity) {
		super();
		this.ticketLineId = ticketLineId;
		this.ticketId = ticketId;
		this.dishId = dishId;
		this.quantity = quantity;
	}

	public Integer getTicketLineId() {
		return ticketLineId;
	}

	public void setTicketLineId(Integer ticketLineId) {
		this.ticketLineId = ticketLineId;
	}

	public Integer getTicketId() {
		return ticketLineId;
	}

	public void setTicketId(Integer ticketId) {
		this.ticketId = ticketId;
	}

	public Integer getDishId() {
		return dishId;
	}

	public void setDishId(Integer dishId) {
		this.dishId = dishId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "TicketLine [ticketLineId=" + ticketLineId + ", ticketId=" + ticketId + ", dishId=" + dishId + ", quantity="
				+ quantity + "]";
	} 
}

