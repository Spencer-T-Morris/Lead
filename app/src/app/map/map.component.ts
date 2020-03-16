import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 })
  zoom = 11
  GR = "grand rapids, michigan"
  public mapHeight: string = "75vh";
  public mapWidth: string = "90vw";
  circles = [ {
    radius: 2,
    center: this.LatLng,
    options: {
      fillColor: '#fff000'
    }
  }]
  constructor() { }
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 10,
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }
  ngOnInit() {
  }

}
