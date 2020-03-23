import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { MapComponent } from './map/map.component';
import { AssitanceComponent } from './assistance/assitance.component';
import { MapPageComponent } from './map-page/map-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'lead-facts',
    component: FactsPageComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  },
  {
    path: 'assistance',
    component: AssitanceComponent
  },
  {
    path: '*',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
