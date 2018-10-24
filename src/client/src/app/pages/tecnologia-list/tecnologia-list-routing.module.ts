import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnologiaListComponent } from './tecnologia-list.component';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiaListRoutingModule { }
