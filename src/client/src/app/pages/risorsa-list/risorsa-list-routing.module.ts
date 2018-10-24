import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RisorsaListComponent } from './risorsa-list.component';

const routes: Routes = [
  {
    path: '',
    component: RisorsaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisorsaListRoutingModule { }
