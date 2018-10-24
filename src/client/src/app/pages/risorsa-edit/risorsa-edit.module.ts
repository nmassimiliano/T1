import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisorsaEditComponent } from './risorsa-edit.component';
import { RisorsaEditRoutingModule } from './risorsa-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RisorsaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RisorsaEditComponent
  ]
})
export class RisorsaEditModule { }
