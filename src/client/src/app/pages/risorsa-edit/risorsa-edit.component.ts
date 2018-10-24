// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { RisorsaService } from '../../services/risorsa.service';
import { TecnologiaService } from '../../services/tecnologia.service';
import { FornitoreService } from '../../services/fornitore.service';
// Import Models
import { Risorsa } from '../../domain/t1_db/risorsa';
import { Fornitore } from '../../domain/t1_db/fornitore';
import { Tecnologia } from '../../domain/t1_db/tecnologia';

// START - USED SERVICES
/**
* RisorsaService.create
*	@description CRUD ACTION create
*
* RisorsaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* TecnologiaService.list
*	@description CRUD ACTION list
*
* FornitoreService.list
*	@description CRUD ACTION list
*
* RisorsaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Risorsa
 */
@Component({
    selector: 'app-risorsa-edit',
    templateUrl: 'risorsa-edit.component.html',
    styleUrls: ['risorsa-edit.component.css']
})
export class RisorsaEditComponent implements OnInit {
    item: Risorsa;
    listFornitore: Fornitore[];
    listTecnologie: Tecnologia[];
    model: Risorsa;
    formValid: Boolean;

    constructor(
    private risorsaService: RisorsaService,
    private tecnologiaService: TecnologiaService,
    private fornitoreService: FornitoreService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Risorsa();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.risorsaService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.fornitoreService.list().subscribe(list => this.listFornitore = list);
            this.tecnologiaService.list().subscribe(list => this.listTecnologie = list);
        });
    }

    /**
     * Check if an Tecnologia is in  tecnologie
     *
     * @param {string} id Id of Tecnologia to search
     * @returns {boolean} True if it is found
     */
    containTecnologia(id: string): boolean {
        if (!this.item.tecnologie) return false;
        return this.item.tecnologie.indexOf(id) !== -1;
    }

    /**
     * Add Tecnologia from Risorsa
     *
     * @param {string} id Id of Tecnologia to add in this.item.tecnologie array
     */
    addTecnologia(id: string) {
        if (!this.item.tecnologie)
            this.item.tecnologie = [];
        this.item.tecnologie.push(id);
    }

    /**
     * Remove an Tecnologia from a Risorsa
     *
     * @param {number} index Index of Tecnologia in this.item.tecnologie array
     */
    removeTecnologia(index: number) {
        this.item.tecnologie.splice(index, 1);
    }

    /**
     * Save Risorsa
     *
     * @param {boolean} formValid Form validity check
     * @param Risorsa item Risorsa to save
     */
    save(formValid: boolean, item: Risorsa): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.risorsaService.update(item).subscribe(data => this.goBack());
            } else {
                this.risorsaService.create(item).subscribe(data => this.goBack());
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



