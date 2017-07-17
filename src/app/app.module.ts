import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TotaleComponent } from './programme/totale/totale.component';

const routes: Routes = [
  {
    path: 'etudiant' ,
    component: EtudiantComponent,
  },
  {
    path: 'programme',
    component: TotaleComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    ProgrammeComponent,
    MenuComponent,
    AccueilComponent,
    TotaleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
