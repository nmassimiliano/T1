import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiaEditComponent } from './tecnologia-edit.component';
import { TecnologiaEditRoutingModule } from './tecnologia-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TecnologiaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TecnologiaEditComponent
  ]
})
export class TecnologiaEditModule { }
