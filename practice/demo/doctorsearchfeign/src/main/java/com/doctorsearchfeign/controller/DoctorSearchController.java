package com.doctorsearchfeign.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doctorsearchfeign.entity.Doctor;
import com.doctorsearchfeign.interfaces.SearchInterface;

//http://localhost:8092/feign/get

@RestController
@RequestMapping("/feign")
public class DoctorSearchController {

	@Autowired
	private SearchInterface searchInterface;
	
	@GetMapping("/get")
	public List<Doctor> getdoctor(){
		return searchInterface.getdoc();
	}
}