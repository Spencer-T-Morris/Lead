import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { MapComponent } from './map/map.component';
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FactsPageComponent,
    MapComponent
  ],
  imports: [
    AppRoutingModule,
    GoogleMapsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
