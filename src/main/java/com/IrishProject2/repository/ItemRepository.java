package com.IrishProject2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IrishProject2.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
	
	public Item findByName(String name);

}
