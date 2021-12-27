package com.IrishProject.query;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.IrishProject.models.Item;
import com.IrishProject.models.Menu;
import com.IrishProject.models.Restaurant;
import com.IrishProject.service.ItemService;
import com.IrishProject.service.MenuService;
import com.IrishProject.service.RestaurantService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;

@Component
public class RestaurantQuery implements GraphQLQueryResolver {

	@Autowired
	private RestaurantService restaurantService;
	
	@Autowired
	private MenuService menuService;
	
	@Autowired
	private ItemService itemService;
	
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

}