import { Routes } from '@angular/router';
import { AjoutDepencesComponent } from './ajout-depences/ajout-depences.component';
import { ListDepencesComponent } from './list-depences/list-depences.component';


export const RouteDepences: Routes = [
    { path: 'depences/ajout', component: AjoutDepencesComponent },
    { path: 'depences', component: ListDepencesComponent }
];
