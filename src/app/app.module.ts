import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DepencesModule } from './components/depences/depences.module';
import { SalairesModule } from './components/salaires/salaires.module';
import { ChargesModule } from './components/charges/charges.module';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DepencesModule,
    SalairesModule,
    ChargesModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
