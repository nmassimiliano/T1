// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TecnologiaService } from '../../services/tecnologia.service';
import { RisorsaService } from '../../services/risorsa.service';
// Import Models
import { Tecnologia } from '../../domain/t1_db/tecnologia';
import { Risorsa } from '../../domain/t1_db/risorsa';

// START - USED SERVICES
/**
* TecnologiaService.create
*	@description CRUD ACTION create
*
* RisorsaService.findBytecnologie
*	@description CRUD ACTION findBytecnologie
*	@param Objectid key Id della risorsa tecnologie da cercare
*
* TecnologiaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* TecnologiaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Tecnologia
 */
@Component({
    selector: 'app-tecnologia-edit',
    templateUrl: 'tecnologia-edit.component.html',
    styleUrls: ['tecnologia-edit.component.css']
})
export class TecnologiaEditComponent implements OnInit {
    item: Tecnologia;
    listTecnologie: Tecnologia[];
    externalRisorsa: Risorsa[];
    model: Tecnologia;
    formValid: Boolean;

    constructor(
    private tecnologiaService: TecnologiaService,
    private risorsaService: RisorsaService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Tecnologia();
        this.externalRisorsa = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.tecnologiaService.get(id).subscribe(item => this.item = item);
                this.risorsaService.findByTecnologie(id).subscribe(list => this.externalRisorsa = list);
            }
            // Get relations
        });
    }


    /**
     * Save Tecnologia
     *
     * @param {boolean} formValid Form validity check
     * @param Tecnologia item Tecnologia to save
     */
    save(formValid: boolean, item: Tecnologia): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.tecnologiaService.update(item).subscribe(data => this.goBack());
            } else {
                this.tecnologiaService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



