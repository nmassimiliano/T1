import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornitoreListComponent } from './fornitore-list.component';
import { FornitoreListRoutingModule } from './fornitore-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FornitoreListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FornitoreListComponent
  ]
})
export class FornitoreListModule { }
