// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { FornitoreEditComponent} from './pages/fornitore-edit/fornitore-edit.component';
import { FornitoreListComponent} from './pages/fornitore-list/fornitore-list.component';
import { RisorsaEditComponent} from './pages/risorsa-edit/risorsa-edit.component';
import { RisorsaListComponent} from './pages/risorsa-list/risorsa-list.component';
import { TecnologiaEditComponent} from './pages/tecnologia-edit/tecnologia-edit.component';
import { TecnologiaListComponent} from './pages/tecnologia-list/tecnologia-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'fornitores/:id',  loadChildren: './pages/fornitore-edit/fornitore-edit.module#FornitoreEditModule' , canActivate: [AuthGuard] },
    { path: 'fornitores',  loadChildren: './pages/fornitore-list/fornitore-list.module#FornitoreListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'risorsas/:id',  loadChildren: './pages/risorsa-edit/risorsa-edit.module#RisorsaEditModule' , canActivate: [AuthGuard] },
    { path: 'risorsas',  loadChildren: './pages/risorsa-list/risorsa-list.module#RisorsaListModule' , canActivate: [AuthGuard] },
    { path: 'tecnologias/:id',  loadChildren: './pages/tecnologia-edit/tecnologia-edit.module#TecnologiaEditModule' , canActivate: [AuthGuard] },
    { path: 'tecnologias',  loadChildren: './pages/tecnologia-list/tecnologia-list.module#TecnologiaListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
