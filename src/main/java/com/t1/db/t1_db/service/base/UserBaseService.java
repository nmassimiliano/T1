package com.t1.db.t1_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.t1.db.t1_db.service.RolesService;
import com.t1.db.t1_db.repositories.RolesRepository;
import com.t1.db.t1_db.entity.Roles;

import com.t1.db.t1_db.entity.User;

import com.t1.db.t1_db.repositories.UserRepository;

@Service
@Transactional
public class UserBaseService {

	
	@Autowired
	UserRepository userRepository;
	@Autowired
	RolesRepository rolesRepository;
	private static RolesService rolesService = new RolesService();

	public User login(String username, String password) {
		if (userRepository.count() == 0) {
			User newUser = new User();
			newUser.setUsername("admin");
			newUser.addRoles(new Roles("ADMIN", newUser));
			newUser.setPassword("1a1dc91c907325c69271ddf0c944bc72");
			rolesRepository.save(newUser.getRoles().get(0));
			userRepository.save(newUser);
		}
		return userRepository.findByUsernameAndPassword(username, password);
	}


    //CRUD METHODS
    
    //CRUD - CREATE
    
	public User insert(User user) {
		return userRepository.save(user);
	}
	
	//CRUD - REMOVE
    
	public void delete(Long id) {
		userRepository.delete(id);
	}

	//CRUD - GET ONE
    	
	public User getOne(Long id) {
		return userRepository.findOne(id);
	}

    	
    //CRUD - GET LIST
    	
	public List<User> getAll() {
		List<User> list = new ArrayList<>();
		userRepository.findAll().forEach(list::add);
		return list;
	}
	

}
