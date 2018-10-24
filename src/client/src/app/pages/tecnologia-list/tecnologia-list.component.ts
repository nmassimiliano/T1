import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TecnologiaService } from '../../services/tecnologia.service';
// Import Models
import { Tecnologia } from '../../domain/t1_db/tecnologia';

// START - USED SERVICES
/**
* TecnologiaService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TecnologiaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Tecnologia
 * @class TecnologiaListComponent
 */
@Component({
    selector: 'app-tecnologia-list',
    templateUrl: './tecnologia-list.component.html',
    styleUrls: ['./tecnologia-list.component.css']
})
export class TecnologiaListComponent implements OnInit {
    list: Tecnologia[];
    search: any = {};
    idSelected: string;
    constructor(
        private tecnologiaService: TecnologiaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.tecnologiaService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Tecnologia to remove
     *
     * @param {string} id Id of the Tecnologia to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Tecnologia
     */
    deleteItem() {
        this.tecnologiaService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
