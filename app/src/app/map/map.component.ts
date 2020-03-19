import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { CityDataService } from '../city-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild('googleMap') gMap: GoogleMap;
  // gMap: google.maps.Map;
  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  geocoder = new google.maps.Geocoder();
  zoom = 11;
  GR = "grand rapids, michigan";
  public mapHeight: string = "75vh";
  public mapWidth: string = "90vw";

  options: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 10
  };

  circles = [{
    radius: 2,
    center: this.LatLng,
    options: {
      fillColor: '#fff000'
    }
  }];

  
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: this.cityDataService.getGeolocations()
    //map: this.gMap
  });

  // private cityDataService: CityDataService
  constructor(private cityDataService: CityDataService) { }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  focusOnAddress(address: string) {
    console.log('Before center:', this.gMap.getCenter().toString());
    // this.centerMapOnAddress(this.geocoder, this.gMap, address);
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        if (this.gMap === undefined) {
          
          console.log('targetMap is undefined');
        } else {
          console.log(results);
          this.gMap.center = results[0].geometry.location;
          this.gMap.zoom = 18;
        }
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
    console.log('After center:', this.gMap.getCenter().toString());
  }

  logCenter() {
    console.log(this.gMap.getCenter().toString());
  }
  //heatmap = new google.maps.visualization.HeatmapLayer({
    //data: this.getCityData(),
    //map: Map
  //});
  //getCityData(){

  //}
  ngOnInit() {
  }
}
