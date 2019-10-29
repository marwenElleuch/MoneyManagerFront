import { Routes } from '@angular/router';
import { AjoutSalairesComponent } from './ajout-salaires/ajout-salaires.component';
import { ListSalairesComponent } from './list-salaires/list-salaires.component';

export const RouteSalaires: Routes = [
    { path: 'salaires/ajout', component: AjoutSalairesComponent },
    { path: 'salaires', component: ListSalairesComponent }
];
