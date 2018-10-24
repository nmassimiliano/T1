import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiaListComponent } from './tecnologia-list.component';
import { TecnologiaListRoutingModule } from './tecnologia-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TecnologiaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TecnologiaListComponent
  ]
})
export class TecnologiaListModule { }
