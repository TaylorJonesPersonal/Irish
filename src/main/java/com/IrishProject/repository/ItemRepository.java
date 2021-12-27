package com.IrishProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IrishProject.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
	
	public Item findByName(String name);

}
