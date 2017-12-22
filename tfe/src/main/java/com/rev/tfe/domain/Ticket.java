package com.rev.tfe.domain;

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
@Table(name="TICKETS")
public class Ticket {

	@Id
	@SequenceGenerator(allocationSize=1,name="T_SEQ",sequenceName="T_SEQ")
	@GeneratedValue(generator="T_SEQ", strategy=GenerationType.SEQUENCE)
	@Column(name="TICKET_ID")
	private Integer ticketId;
	
	@Column(name="TIME_SUBMITTED", nullable=false)
	private String timeSubmitted;
	
	@Column(name="TIME_RESOLVED")
	private String timeResolved;
	
	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="USER_ID", nullable=false)
	private User userId;
	
	@Column(name="TOTAL", nullable=false)
	private Double total;

	public Ticket() {};
	
	public Ticket(String timeSubmitted, String timeResolved, User userId, Double total) {
		super();
		this.timeSubmitted = timeSubmitted;
		this.timeResolved = timeResolved;
		this.userId = userId;
		this.total = total;
	}
	
	public Ticket(Integer ticketId, String timeSubmitted, String timeResolved, User userId, Double total) {
		super();
		this.ticketId = ticketId;
		this.timeSubmitted = timeSubmitted;
		this.timeResolved = timeResolved;
		this.userId = userId;
		this.total = total;
	}

	public Integer getTicketId() {
		return ticketId;
	}

	public void setTicketId(Integer ticketId) {
		this.ticketId = ticketId;
	}

	public String getTimeSubmitted() {
		return timeSubmitted;
	}

	public void setTimeSubmitted(String timeSubmitted) {
		this.timeSubmitted = timeSubmitted;
	}

	public String getTimeResolved() {
		return timeResolved;
	}

	public void setTimeResolved(String timeResolved) {
		this.timeResolved = timeResolved;
	}

	public User getUser_Id() {
		return userId;
	}

	public void setUser_Id(User userId) {
		this.userId = userId;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
	
	
	
}
