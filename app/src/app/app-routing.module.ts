import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { MapComponent } from './map/map.component';


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
    component: MapComponent
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
