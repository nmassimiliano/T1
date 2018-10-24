import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornitoreEditComponent } from './fornitore-edit.component';
import { FornitoreEditRoutingModule } from './fornitore-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FornitoreEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FornitoreEditComponent
  ]
})
export class FornitoreEditModule { }
