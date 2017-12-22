package com.rev.tfe.domain;

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
@Table(name="TYPE")
public class Type {
	@Id
	@Column(name="TYPE_ID")
	@SequenceGenerator(allocationSize=1, name="D_SEQ", sequenceName="D_SEQ")
	@GeneratedValue(generator="D_SEQ", strategy=GenerationType.SEQUENCE)
	private String id;
	
	@Column(name="TYPE", nullable=false, unique=true)
	private String type;

	public Type() {
		super();
	}

	public Type(String id, String type) {
		super();
		this.id = id;
		this.type = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Type [id=" + id + ", type=" + type + "]";
	}	
}
