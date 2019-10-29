import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { DashbordTemplateComponent } from './dashbord-template/dashbord-template.component';


export const routes: Routes = [
    { path: '', component: DashbordComponent },
    { path: 'dash', component: DashbordTemplateComponent },
];