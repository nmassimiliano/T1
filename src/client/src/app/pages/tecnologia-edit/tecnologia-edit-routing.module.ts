import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnologiaEditComponent } from './tecnologia-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiaEditRoutingModule { }
