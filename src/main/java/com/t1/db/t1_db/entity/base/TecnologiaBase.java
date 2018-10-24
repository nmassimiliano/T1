package com.t1.db.t1_db.entity.base;

/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
                                                                                   
 * DO NOT EDIT THIS FILE!! 
 *
 *  FOR CUSTOMIZE TecnologiaBase PLEASE EDIT ../Tecnologia.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of Tecnologia object
 * 
 */

import javax.persistence.GeneratedValue;
import javax.persistence.MappedSuperclass;
import javax.persistence.Id;
import javax.persistence.Column;
import java.util.Date;
import javax.persistence.ManyToOne;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.FetchType;
import java.util.stream.Collectors;
import com.t1.db.t1_db.entity.Tecnologia;
// Import relations

import com.t1.db.t1_db.entity.Risorsa;



@MappedSuperclass
public class TecnologiaBase {
	
	@Id
	@GeneratedValue
	private Long _id;
	
	// Attributes
	@Column()
    private String descrizione;
	
	@ManyToMany(mappedBy="tecnologie")
	private List<Risorsa> Risorsas = new ArrayList<>();
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
    

    
	// Relations Risorsa

	public List<Risorsa> getRisorsa() {
		return this.Risorsas;
	}

	public void addRisorsa(Risorsa Risorsa) {
		this.Risorsas.add(Risorsa);
	}

	public void removeRisorsa(Risorsa Risorsa) {
		this.Risorsas.remove(Risorsa);
	}
	
}