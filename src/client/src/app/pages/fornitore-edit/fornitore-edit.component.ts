// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { FornitoreService } from '../../services/fornitore.service';
import { RisorsaService } from '../../services/risorsa.service';
// Import Models
import { Fornitore } from '../../domain/t1_db/fornitore';
import { Risorsa } from '../../domain/t1_db/risorsa';

// START - USED SERVICES
/**
* FornitoreService.create
*	@description CRUD ACTION create
*
* RisorsaService.findByfornitore
*	@description CRUD ACTION findByfornitore
*	@param Objectid key Id della risorsa fornitore da cercare
*
* FornitoreService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* FornitoreService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Fornitore
 */
@Component({
    selector: 'app-fornitore-edit',
    templateUrl: 'fornitore-edit.component.html',
    styleUrls: ['fornitore-edit.component.css']
})
export class FornitoreEditComponent implements OnInit {
    item: Fornitore;
    listFornitore: Fornitore[];
    externalRisorsa: Risorsa[];
    model: Fornitore;
    formValid: Boolean;

    constructor(
    private fornitoreService: FornitoreService,
    private risorsaService: RisorsaService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Fornitore();
        this.externalRisorsa = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.fornitoreService.get(id).subscribe(item => this.item = item);
                this.risorsaService.findByFornitore(id).subscribe(list => this.externalRisorsa = list);
            }
            // Get relations
        });
    }


    /**
     * Save Fornitore
     *
     * @param {boolean} formValid Form validity check
     * @param Fornitore item Fornitore to save
     */
    save(formValid: boolean, item: Fornitore): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.fornitoreService.update(item).subscribe(data => this.goBack());
            } else {
                this.fornitoreService.create(item).subscribe(data => this.goBack());
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



