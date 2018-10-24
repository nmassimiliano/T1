import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RisorsaEditComponent } from './risorsa-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RisorsaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisorsaEditRoutingModule { }
