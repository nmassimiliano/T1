package com.t1.db.t1_db.entity;

import javax.persistence.Entity;
import com.t1.db.t1_db.entity.base.FornitoreBase;

@Entity
public class Fornitore extends FornitoreBase {

    public Fornitore() {}

    public Fornitore(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}
