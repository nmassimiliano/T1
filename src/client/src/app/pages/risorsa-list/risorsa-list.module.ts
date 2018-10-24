import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisorsaListComponent } from './risorsa-list.component';
import { RisorsaListRoutingModule } from './risorsa-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RisorsaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RisorsaListComponent
  ]
})
export class RisorsaListModule { }
