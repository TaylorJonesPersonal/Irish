package com.IrishProject2.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.IrishProject2.models.Item;
import com.IrishProject2.models.Menu;
import com.IrishProject2.models.Restaurant;
import com.IrishProject2.repository.RestaurantRepository;

@Service
public class RestaurantService {

	private RestaurantRepository restaurantRepository;
	
	public RestaurantService(RestaurantRepository restaurantRepository) {
		this.restaurantRepository = restaurantRepository;
	}
	
	@Transactional(readOnly=true)
	public Optional<Restaurant> getRestaurant(int id) {
		return this.restaurantRepository.findById(id);
	}
	
	@Transactional(readOnly = true)
	public List<Restaurant> getAllRestaurants(int count){
		return this.restaurantRepository.findAll().stream().limit(count).collect(Collectors.toList());
	}
	
	@Transactional
	public Restaurant createRestaurant(String name, String description, int menu, String imageURL, Float restaurantLatitude, Float restaurantLongitude) {
		Menu newMenu = new Menu();
		newMenu.setId(menu);
		final Restaurant newRestaurant = new Restaurant();
		newRestaurant.setName(name);
		newRestaurant.setDescription(description);
		newRestaurant.setMenu(newMenu);
		newRestaurant.setImageURL(imageURL);
		newRestaurant.setRestaurantLatitude(restaurantLatitude);
		newRestaurant.setRestaurantLongitude(restaurantLongitude);
		return restaurantRepository.save(newRestaurant);
	}

}
