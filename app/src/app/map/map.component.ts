import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  LatLng= new google.maps.LatLng({lng:-85.6681, lat: 42.9634})
  zoom= 10
  GR= "grand rapids, michigan"
  constructor() { }

  ngOnInit() {
   
  }

}
