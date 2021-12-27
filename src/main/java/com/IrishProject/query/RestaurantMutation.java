package com.IrishProject.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.IrishProject.models.Item;
import com.IrishProject.models.Restaurant;
import com.IrishProject.service.ItemService;
import com.IrishProject.service.RestaurantService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class RestaurantMutation implements GraphQLMutationResolver {
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private RestaurantService restaurantService;
	
	public Item createItem(String name, double price, int menu) {
		return this.itemService.createItem(name, price, menu);
	}
	
	public Restaurant createRestaurant(String name, String description, int menu) {
		return this.restaurantService.createRestaurant(name, description, menu);
	}
	
	
}
