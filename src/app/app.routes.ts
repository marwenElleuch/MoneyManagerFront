import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { DashbordTemplateComponent } from './dashbord-template/dashbord-template.component';
import { Dashbord2TemplateComponent } from './dashbord2-template/dashbord2-template.component';


export const routes: Routes = [
    { path: '', component: DashbordComponent },
    { path: 'dash', component: DashbordTemplateComponent },
    { path: 'dashTwo', component: Dashbord2TemplateComponent },
];