import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiKey = "AIzaSyAaN_d2vPI53W3kxj3KtykfWCbnFAhwc10"

  @ViewChild('sidenav') sidenav: MatSidenav;
  
  
  
}
