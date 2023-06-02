package com.circuitdemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

public class MyService {
	
	@Autowired
	RestTemplate restTemplate;

    public MyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


@GetMapping("/test1")
@CircuitBreaker(name = "test1service", fallbackMethod = "fallback")
public String test() {
	String url = "http://localhost:7081/product-service";
    return this.restTemplate.getForObject(url, String.class);
 
}

private String fallback(Throwable e) {
	 
    System.out.println("Exception happened : " + e.getMessage());
    return "Handled the exception through fallback method";
}

}