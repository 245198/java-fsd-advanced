package com.ust.security.jdbc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
	
	@GetMapping("/")
	public String homeFun()
	{
		return ("<h1>Welcome</h1>");
	}
	
	@GetMapping("/user")
	public String userFun()
	{
		return ("<h1>Welcome User</h1>");
	}
	

	@GetMapping("/admin")
	public String adminFun()
	{
		return ("<h1>Welcome Admin</h1>");
	}

}
