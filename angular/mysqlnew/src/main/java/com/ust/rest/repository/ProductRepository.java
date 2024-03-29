package com.ust.rest.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.rest.resource.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> //Long is the data type of primary key column
{

}