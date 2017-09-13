import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/burbank', pathMatch: 'full' },
  { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
  { path: 'dallas', pathMatch: 'full', component: DallasComponent },
  { path: 'sanjose', pathMatch: 'full', component: SanjoseComponent },
  { path: 'dc', pathMatch: 'full', component: DcComponent },
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent },
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
