package com.IrishProject2.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.IrishProject2.models.Customer;
import com.IrishProject2.repository.CustomerRepository;

@Service
public class CustomerService {

	private CustomerRepository customerRepository;
	
	public CustomerService(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
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
