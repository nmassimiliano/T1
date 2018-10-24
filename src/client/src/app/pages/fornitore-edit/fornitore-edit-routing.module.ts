import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornitoreEditComponent } from './fornitore-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FornitoreEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornitoreEditRoutingModule { }
