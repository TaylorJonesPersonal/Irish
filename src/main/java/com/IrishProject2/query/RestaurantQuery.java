package com.IrishProject2.query;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.IrishProject2.models.Customer;
import com.IrishProject2.models.Item;
import com.IrishProject2.models.Menu;
import com.IrishProject2.models.Restaurant;
import com.IrishProject2.service.CustomerService;
import com.IrishProject2.service.ItemService;
import com.IrishProject2.service.MenuService;
import com.IrishProject2.service.RestaurantService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;

@Component
public class RestaurantQuery implements GraphQLQueryResolver {

	@Autowired
	private RestaurantService restaurantService;
	
	@Autowired
	private MenuService menuService;
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private CustomerService customerService;
	
	public Optional<Restaurant> getRestaurant(int id){
		return this.restaurantService.getRestaurant(id);
	}
	
	public List<Restaurant> getRestaurants(int count){
		return this.restaurantService.getAllRestaurants(count);
	}
	
	public List<Menu> getMenus(int count){
		return this.menuService.getAllMenus(count);
	}
	
	public List<Item> getItems(int count) {
		return this.itemService.getAllItems(count);
	}
	
	public Item getItem(String name) {
		return this.itemService.getItemByName(name);
	}
	
	public List<Customer> getCustomers(int count) {
		return this.customerService.getAllCustomers(count);
	}
	
	public Customer getCustomer(String username) {
		return this.customerService.getCustomerByUsername(username);
	}

}