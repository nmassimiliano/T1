import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { FornitoreService } from '../../services/fornitore.service';
// Import Models
import { Fornitore } from '../../domain/t1_db/fornitore';

// START - USED SERVICES
/**
* FornitoreService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* FornitoreService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Fornitore
 * @class FornitoreListComponent
 */
@Component({
    selector: 'app-fornitore-list',
    templateUrl: './fornitore-list.component.html',
    styleUrls: ['./fornitore-list.component.css']
})
export class FornitoreListComponent implements OnInit {
    list: Fornitore[];
    search: any = {};
    idSelected: string;
    constructor(
        private fornitoreService: FornitoreService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.fornitoreService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Fornitore to remove
     *
     * @param {string} id Id of the Fornitore to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Fornitore
     */
    deleteItem() {
        this.fornitoreService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
