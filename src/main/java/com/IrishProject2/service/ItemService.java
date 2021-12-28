package com.IrishProject2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.IrishProject2.models.Item;
import com.IrishProject2.models.Menu;
import com.IrishProject2.repository.ItemRepository;

@Service
public class ItemService {

	private ItemRepository itemRepository;
	
	public ItemService(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}
	
	@Transactional(readOnly=true)
	public List<Item> getAllItems(int count){
		return this.itemRepository.findAll().stream().limit(count).collect(Collectors.toList());
	}
	
	@Transactional(readOnly=true)
	public Item getItemByName(String name) {
		return this.itemRepository.findByName(name);
	}
	
	@Transactional
	public Item createItem(String name, double price, int menu) {
		Menu newMenu = new Menu();
		newMenu.setId(menu);
		final Item newItem = new Item();
		newItem.setName(name);
		newItem.setPrice(price);
		newItem.setMenu(newMenu);
		return itemRepository.save(newItem);
	}

}
