package com.rev.tfe.boot.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="DISH")
public class Dish {
	
	@Id
	@Column(name="DISH_ID")
	@SequenceGenerator(name="D_SEQ", sequenceName="D_SEQ")
	@GeneratedValue(generator="D_SEQ", strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="DISH_NAME", nullable=false, unique=true)
	private String name;

	@Column(name="DISH_PRICE", nullable=false)
	private Double price;

	@Column(name="DISH_DESCRIPTION", nullable=true)
	private String description;

//	@Autowired
//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "dish", cascade=CascadeType.ALL)
//	private Set<TicketLine> ticketLines = new HashSet<TicketLine>();
	
/*	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="TICKET_LINE_ID", nullable=false)
    private TicketLine ticketline;*/
	
/*	@Autowired
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="DISH_REVIEW_ID", nullable=false)
    private DishReview dishreview;*/

	public Dish() {
		super();
	}
	
	public Dish(String name, Double price, String description) {
		super();
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public Dish(Integer id, String name, Double price, String description) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Dish [id=" + id + ", name=" + name + ", price=" + price + ", description=" + description + "]";
	}

//	public Set<TicketLine> getTicketLines() {
//		return ticketLines;
//	}
//
//	public void setTicketLines(Set<TicketLine> ticketLines) {
//		this.ticketLines = ticketLines;
//	}

//	@Override
//	public String toString() {
//		return "Dish [id=" + id + ", name=" + name + ", price=" + price + ", description=" + description
//				+ ", ticketLines=" + ticketLines + "]";
//	}
}
