package com.IrishProject2.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.IrishProject2.models.Customer;
import com.IrishProject2.models.Item;
import com.IrishProject2.models.Restaurant;
import com.IrishProject2.service.CustomerService;
import com.IrishProject2.service.ItemService;
import com.IrishProject2.service.RestaurantService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class RestaurantMutation implements GraphQLMutationResolver {
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private RestaurantService restaurantService;
	
	@Autowired
	private CustomerService customerService;
	
	public Item createItem(String name, double price, int menu) {
		return this.itemService.createItem(name, price, menu);
	}
	
	public Restaurant createRestaurant(String name, String description, int menu, String imageURL) {
		return this.restaurantService.createRestaurant(name, description, menu, imageURL);
	}
	
	public Customer createCustomer(String firstName, String lastName, String email, String username, String password, String gender) {
		return this.customerService.createCustomer(firstName, lastName, email, username, password, gender);
	}
	
	
}
