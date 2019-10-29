import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteSalaires } from 'src/app/components/salaires/salaires.routes';
import { AjoutSalairesComponent } from './ajout-salaires/ajout-salaires.component';
import { ListSalairesComponent } from './list-salaires/list-salaires.component';

@NgModule({
  declarations: [AjoutSalairesComponent, ListSalairesComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(RouteSalaires),
  ]
})
export class SalairesModule { }