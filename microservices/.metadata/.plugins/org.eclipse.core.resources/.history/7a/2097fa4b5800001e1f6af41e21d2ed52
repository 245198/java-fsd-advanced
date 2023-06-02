package com.example.demo.publisher;

import java.util.UUID;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.MessagingConfig;
import com.example.demo.model.OrderStatus;
import com.example.demo.model.PurchaseOrder;



@RestController
@RequestMapping("/order")
public class PurchaseOrderPublisher {

	//this will be restcontroller
	//we will invoke this using postman
	
	
	//publisher will have dependence on template
	
	@Autowired
	private RabbitTemplate template;
	
	
	
	//when we order a items
	//if the payments is done or not
	//then the order will be placed
	
	@PostMapping("/{customerName}")
	public String bookOrder(@RequestBody PurchaseOrder order,
			@PathVariable String customerName)
	
	{
		order.setOrderId(UUID.randomUUID().toString());
		//other service calls
		//other service call
		OrderStatus orderStatus=new OrderStatus(order,"ACCEPTED",
			"order placed successfully by" +customerName	);
		template.convertAndSend(MessagingConfig.EXCHANGE,
				MessagingConfig.ROUTING_KEY,orderStatus);
		
		return "Success";  //this is confirmation
			
	}
	
}
