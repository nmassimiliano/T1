package com.t1.db.t1_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.t1.db.t1_db.entity.Tecnologia;

import com.t1.db.t1_db.repositories.TecnologiaRepository;

@Service
@Transactional
public class TecnologiaBaseService {

	
	@Autowired
	TecnologiaRepository tecnologiaRepository;


    //CRUD METHODS
    
    //CRUD - CREATE
    
	public Tecnologia insert(Tecnologia tecnologia) {
		return tecnologiaRepository.save(tecnologia);
	}
	
	//CRUD - REMOVE
    
	public void delete(Long id) {
		tecnologiaRepository.delete(id);
	}

	//CRUD - GET ONE
    	
	public Tecnologia getOne(Long id) {
		return tecnologiaRepository.findOne(id);
	}

    	
    //CRUD - GET LIST
    	
	public List<Tecnologia> getAll() {
		List<Tecnologia> list = new ArrayList<>();
		tecnologiaRepository.findAll().forEach(list::add);
		return list;
	}
	

}
