package com.IrishProject2.models;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="restaurant")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {

	@Id
	@Column(name="restaurant_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="restaurant_name")
	private String name;
	
	@Column(name="restaurant_description")
	private String description;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="menu", referencedColumnName="menu_id")
	private Menu menu;
	
}
