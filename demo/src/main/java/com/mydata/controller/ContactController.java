package com.mydata.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mydata.model.Contact;
import com.mydata.Service.ContactService;

@RestController
public class ContactController {
	@Autowired
	ContactService contactService;

	@PostMapping("/save")
	private Contact saveContact(@RequestBody Contact contact) {
		return contactService.savecontact(contact);

	}
}
