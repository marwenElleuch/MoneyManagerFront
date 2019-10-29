import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutDepencesComponent } from './ajout-depences/ajout-depences.component';
import { RouterModule } from '@angular/router';
import { RouteDepences } from './depences.routes';
import { ListDepencesComponent } from './list-depences/list-depences.component';

@NgModule({
  declarations: [AjoutDepencesComponent, ListDepencesComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(RouteDepences),
  ]
})
export class DepencesModule { }
