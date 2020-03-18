import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild('googleMap') gMap: google.maps.Map;
  // gMap: google.maps.Map;
  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  geocoder = new google.maps.Geocoder();
  zoom = 11;
  GR = "grand rapids, michigan";
  public mapHeight: string = "75vh";
  public mapWidth: string = "90vw";

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
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

  constructor() { }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  focusOnAddress(address: string) {
    console.log('Focusing on', address);
    this.centerMapOnAddress(this.geocoder, this.gMap, address);
    // console.log(this.gMap);
    // this.geocoder.geocode({ 'address': address }, function (results, status) {
    //   if (status == 'OK') {
    //     if ( false ) {
    //       // this.gMap === undefined
    //       console.log('gMap is undefined');
    //     } else {
    //       this.gMap.center = results[0].geometry.location;
    //       this.gMap.zoom = 16;
    //     }
    //   } else {
    //     console.log('Geocode was not successful for the following reason: ' + status);
    //   }
    // });
  }

  logCenter() {
    console.log(this.gMap.getCenter().toString());
  }

  centerMapOnAddress(newGeocoder, targetMap, address) {
    newGeocoder.geocode({ 'address': address }, function (results, status) {
      if (status == 'OK') {
        if (targetMap === undefined) {
          console.log('gargetMap is undefined');
        } else {
          targetMap.center = results[0].geometry.location;
          targetMap.zoom = 16;
        }
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  ngOnInit() {
  }
}
