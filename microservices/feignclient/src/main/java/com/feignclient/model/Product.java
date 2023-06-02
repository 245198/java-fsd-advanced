package com.feignclient.model;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {


//private long productId;
//	
//private String name;
//private String description;
//private BigDecimal price;
//private int qty;


	Integer productId;
	String name;
	String category;
	String brand;
	double price;
}

