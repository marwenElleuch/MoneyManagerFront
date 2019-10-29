import { AjoutChargesComponent } from './ajout-charges/ajout-charges.component';
import { Routes } from '@angular/router';
import { ListChargesComponent } from './list-charges/list-charges.component';

export const RouteCharges: Routes = [
    { path: 'Charges/ajout', component: AjoutChargesComponent },
    { path: 'Charges', component: ListChargesComponent },
];
