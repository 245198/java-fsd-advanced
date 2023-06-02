package com.circuitdemo.resource;

import org.springframework.web.bind.annotation.GetMapping;

import com.circuitdemo.services.MyService;

public class MyController {
	
	private final MyService ser;

    public MyController(MyService remoteService) {
        this.ser = remoteService;
    }

    @GetMapping("/getcontent")
    public String myEndpoint() {
        return ser.test();
    }

}
