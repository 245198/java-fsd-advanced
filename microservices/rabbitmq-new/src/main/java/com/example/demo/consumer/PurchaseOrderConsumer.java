package com.example.demo.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.example.demo.config.MessagingConfig;
import com.example.demo.model.Order;



import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;




@Component
public class PurchaseOrderConsumer {


		@RabbitListener(queues=MessagingConfig.QUEUE)
		public void consumeMessageFromQueue(Order orderStatus)
		{
			System.out.println("Message received from queue: "+orderStatus);
		}

	}