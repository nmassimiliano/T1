package com.t1.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.modelmapper.ModelMapper;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.t1.db.t1_db.service.TecnologiaService;
import com.t1.db.t1_db.entity.Tecnologia;
import com.t1.db.t1_db.dtos.TecnologiaDto;

//IMPORT RELATIONS

import com.t1.db.t1_db.service.RisorsaService;


public class TecnologiaBaseController {
    
    @Autowired
	TecnologiaService tecnologiaService;

	
	@Autowired
	RisorsaService risorsaService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/tecnologias")
	public ResponseEntity<TecnologiaDto> insert(@RequestBody Tecnologia obj) {
				
		//external relation Risorsa
		if (obj.getRisorsa() != null) {
			obj.getRisorsa().forEach(risorsa -> {
				risorsa.addTecnologia(obj);
				risorsaService.insert(risorsa);
			});
		}
		
		
		return ResponseEntity.ok().body(convertToDto(tecnologiaService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/tecnologias/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Tecnologia tecnologiaSelected = tecnologiaService.getOne(id);
		
		//external relation Risorsa
		if (tecnologiaSelected.getRisorsa() != null) {
			tecnologiaSelected.getRisorsa().forEach(risorsa -> {
				risorsa.getTecnologie().removeIf(tecnologia -> tecnologia.get_id() == tecnologiaSelected.get_id());
				risorsaService.insert(risorsa);
			});
		}
		
		tecnologiaService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/tecnologias/{id}")
	public ResponseEntity<TecnologiaDto> get(@PathVariable("id") Long id) {
		Tecnologia tecnologiaSelected = tecnologiaService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(tecnologiaSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/tecnologias")
	public ResponseEntity<List<TecnologiaDto>> getList() {
		List<Tecnologia> list = tecnologiaService.getAll();
		List<TecnologiaDto> listDto = list.stream()
				.map(tecnologia -> convertToDto(tecnologia))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/tecnologias/{id}")
	public ResponseEntity<TecnologiaDto> update(@RequestBody Tecnologia obj, @PathVariable("id") Long id) {
	    
		//external relation Risorsa
		if (obj.getRisorsa() != null) {
			obj.getRisorsa().forEach(risorsa -> {
				risorsa.addTecnologia(obj);
				risorsaService.insert(risorsa);
			});
		}
		
		
		return ResponseEntity.ok().body(convertToDto(tecnologiaService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private TecnologiaDto convertToDto(Tecnologia tecnologia) {
		TecnologiaDto tecnologiaDto = modelMapper.map(tecnologia, TecnologiaDto.class);
		return tecnologiaDto;
	}
}
