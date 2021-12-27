package com.IrishProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IrishProject.models.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {


}
