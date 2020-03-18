import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { MapComponent } from './map/map.component';
import { AssitanceComponent } from './assistance/assitance.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FactsPageComponent,
    MapComponent,
    AssitanceComponent
  ],
  imports: [
    AppRoutingModule,
    GoogleMapsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
