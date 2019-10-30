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
import { DashbordTemplateComponent } from './dashbord-template/dashbord-template.component';
import { AuthentificationModule } from './components/authentification/authentification.module';
import { Dashbord2TemplateComponent } from './dashbord2-template/dashbord2-template.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    DashbordTemplateComponent,
    Dashbord2TemplateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DepencesModule,
    SalairesModule,
    ChargesModule,
    TemplateModule,
    AuthentificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
