package com.IrishProject.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.IrishProject.models.Menu;
import com.IrishProject.repository.MenuRepository;

@Service
public class MenuService {

	private MenuRepository menuRepository;
	
	public MenuService(MenuRepository menuRepository) {
		this.menuRepository = menuRepository;
	}
	
	@Transactional(readOnly=true)
	public List<Menu> getAllMenus(int count){
		return this.menuRepository.findAll().stream().limit(count).collect(Collectors.toList());
	}

}
