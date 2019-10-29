import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutChargesComponent } from './ajout-charges/ajout-charges.component';
import { RouterModule } from '@angular/router';
import { RouteCharges } from './charges.routes';
import { ListChargesComponent } from './list-charges/list-charges.component';

@NgModule({
  declarations: [AjoutChargesComponent, ListChargesComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(RouteCharges),
  ]
})
export class ChargesModule { }
