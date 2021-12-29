package com.IrishProject2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.IrishProject2.models.Customer;
import com.IrishProject2.models.Item;
import com.IrishProject2.repository.CustomerRepository;

@Service
public class CustomerService {

	private CustomerRepository customerRepository;
	
	public CustomerService(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}
	
	@Transactional(readOnly=true)
	public List<Customer> getAllCustomers(int count){
		return this.customerRepository.findAll().stream().limit(count).collect(Collectors.toList());
	}
	
	@Transactional
	public Customer createCustomer(String firstName, String lastName, String email, String username, String password) {
		Customer newCustomer = new Customer();
		newCustomer.setFirstName(firstName);
		newCustomer.setLastName(lastName);
		newCustomer.setEmail(email);
		newCustomer.setUsername(username);
		newCustomer.setPassword(password);
		return customerRepository.save(newCustomer);
	}
}
