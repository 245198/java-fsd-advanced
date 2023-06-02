package com.billingservice.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/billing")
public class BillingService {
	
	@GetMapping
	public String BillingFun()
	{
		return "Billing Service Running";
		
	}

}
