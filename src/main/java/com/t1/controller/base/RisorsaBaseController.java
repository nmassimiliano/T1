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
import com.t1.db.t1_db.service.RisorsaService;
import com.t1.db.t1_db.entity.Risorsa;
import com.t1.db.t1_db.dtos.RisorsaDto;

import com.t1.db.t1_db.entity.Fornitore;

import com.t1.db.t1_db.entity.Tecnologia;

//IMPORT RELATIONS

import com.t1.db.t1_db.service.FornitoreService;

import com.t1.db.t1_db.service.TecnologiaService;


public class RisorsaBaseController {
    
    @Autowired
	RisorsaService risorsaService;

	
	@Autowired
	FornitoreService fornitoreService;
	
	@Autowired
	TecnologiaService tecnologiaService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/risorsas")
	public ResponseEntity<RisorsaDto> insert(@RequestBody Risorsa obj) {
				
		//external relation fornitore
		if (obj.getFornitore() != null) {
			if (obj.getFornitore().get_id() == null)
				fornitoreService.insert(obj.getFornitore());
			else
				fornitoreService.insert(fornitoreService.getOne(obj.getFornitore().get_id()));
		}
				
		//external relation tecnologie
		if (obj.getTecnologie() != null && !obj.getTecnologie().isEmpty()) {
			obj.getTecnologie().forEach(tecnologia -> {
				tecnologia = tecnologiaService.getOne(tecnologia.get_id());
				tecnologia.addRisorsa(obj);
				tecnologiaService.insert(tecnologia);
			});
		}
		
		
		return ResponseEntity.ok().body(convertToDto(risorsaService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/risorsas/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Risorsa risorsaSelected = risorsaService.getOne(id);
		
		
		//external relation tecnologie
		if (risorsaSelected.getTecnologie() != null) {
			risorsaSelected.getTecnologie().forEach(tecnologia -> {
				tecnologia.getRisorsa().removeIf(risorsa -> risorsa.get_id() == risorsaSelected.get_id());
				tecnologiaService.insert(tecnologia);
			});
		}
		
		risorsaService.delete(id);
		return ResponseEntity.ok().build();
	}
	
    //CRUD - FIND BY Fornitore
    
	@GetMapping("/risorsas/findByfornitore/{key}")
	public ResponseEntity<List<RisorsaDto>> findByFornitore(@PathVariable("key") Long id) {
		
		Fornitore fornitore = fornitoreService.getOne(id);
		List<Risorsa> risorsas = risorsaService.findByFornitore(fornitore);
		List<RisorsaDto> risorsasDto = risorsas.stream()
				.map(risorsa -> convertToDto(risorsa))
				.collect(Collectors.toList());
		
		
		
		

		return ResponseEntity.ok().body(risorsasDto);
	}
    //CRUD - FIND BY Tecnologie
    
	@GetMapping("/risorsas/findBytecnologie/{key}")
	public ResponseEntity<List<RisorsaDto>> findByTecnologie(@PathVariable("key") Long id) {
		
		
		
		
		Tecnologia tecnologia = tecnologiaService.getOne(id);
		List<Risorsa> risorsas = risorsaService.findByTecnologie(tecnologia);
		List<RisorsaDto> risorsasDto = risorsas.stream()
				.map(risorsa -> convertToDto(risorsa))
				.collect(Collectors.toList());
		

		return ResponseEntity.ok().body(risorsasDto);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/risorsas/{id}")
	public ResponseEntity<RisorsaDto> get(@PathVariable("id") Long id) {
		Risorsa risorsaSelected = risorsaService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(risorsaSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/risorsas")
	public ResponseEntity<List<RisorsaDto>> getList() {
		List<Risorsa> list = risorsaService.getAll();
		List<RisorsaDto> listDto = list.stream()
				.map(risorsa -> convertToDto(risorsa))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/risorsas/{id}")
	public ResponseEntity<RisorsaDto> update(@RequestBody Risorsa obj, @PathVariable("id") Long id) {
	    
		//external relation fornitore
		if (obj.getFornitore() != null) {
			if (obj.getFornitore().get_id() == null)
				fornitoreService.insert(obj.getFornitore());
			else
				fornitoreService.insert(fornitoreService.getOne(obj.getFornitore().get_id()));
		}
				
		//external relation tecnologie
		if (obj.getTecnologie() != null) {
			obj.getTecnologie().forEach(tecnologia -> {
				tecnologia = tecnologiaService.getOne(tecnologia.get_id());
				tecnologia.addRisorsa(obj);
				tecnologiaService.insert(tecnologia);
			});
		}
		
		
		return ResponseEntity.ok().body(convertToDto(risorsaService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private RisorsaDto convertToDto(Risorsa risorsa) {
		RisorsaDto risorsaDto = modelMapper.map(risorsa, RisorsaDto.class);
		return risorsaDto;
	}
}
