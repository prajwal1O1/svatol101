package com.mydata.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mydata.Repository.ContactRepository;
import com.mydata.model.Contact;

@Service
public class ContactServiceimpl implements ContactService {
	@Autowired
	ContactRepository contactRepository;

	@Override
	public Contact savecontact(Contact contact) {
		return contactRepository.save(contact);
	}

}
