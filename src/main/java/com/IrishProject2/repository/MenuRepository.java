package com.IrishProject2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IrishProject2.models.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {


}
