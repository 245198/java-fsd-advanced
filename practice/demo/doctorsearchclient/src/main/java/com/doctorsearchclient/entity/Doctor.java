package com.doctorsearchclient.entity;


public class Doctor {

	
	private long id;
	private String name;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Doctor() {
		// TODO Auto-generated constructor stub
	}
	public Doctor(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	
}
