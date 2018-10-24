import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornitoreListComponent } from './fornitore-list.component';

const routes: Routes = [
  {
    path: '',
    component: FornitoreListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornitoreListRoutingModule { }
