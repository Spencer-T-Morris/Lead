import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CityDataService } from '../city-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  // HTML elements
  @ViewChild('googleMap') gMap: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild('infoWindowContent') infoWindowContent: ElementRef;

  // Marker vars
  showMarkers = true;
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLng[] = this.cityDataService.getGeolocations();
  visibleMarkers: google.maps.LatLng[] = [];

  // Map vars
  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  geocoder = new google.maps.Geocoder();
  initZoom = 11;
  GR = "grand rapids, michigan";
  mapHeight: string = "75vh";
  mapWidth: string = "90vw";

  options: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 10
  };

  heatmapOptions = {
    data: this.cityDataService.getGeolocations(),
    //dissipating: false, // prevent heatmap from disappearing when zooming
    radius: 15, // have to manually set radius when dissipating is false
  };

  heatmap = new google.maps.visualization.HeatmapLayer(this.heatmapOptions);

  // private cityDataService: CityDataService
  constructor(private cityDataService: CityDataService) { }

  focusOnAddress(address: string) {
    console.log(this.gMap);
    // this.centerMapOnAddress(this.geocoder, this.gMap, address);
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        if (this.gMap === undefined) {
          console.log('gMap is undefined');
        } else {
          this.gMap.center = results[0].geometry.location;
          this.gMap.zoom = 18;
        }
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  updateZoom() {
    if (!(this.gMap === undefined)) {
      // let zoomDifference = this.gMap.getZoom() - this.initZoom;
      // if (zoomDifference > 0) {
      //   this.heatmapOptions.radius = (1 / Math.pow(10, zoomDifference));
      // } else if (zoomDifference == 0) {
      //   this.heatmapOptions.radius = 0.001;
      // }
      // console.log(this.heatmapOptions);
      // this.heatmap.setOptions(this.heatmapOptions);
      if (this.initZoom >= 16) {
        this.updateMarkers();
      } else {
        // Clear markers
        this.visibleMarkers = [];
      }
    }
  }

  updateMarkers() {
    if (this.showMarkers) {
      this.visibleMarkers = this.markerPositions.filter(m => this.gMap.getBounds().contains(m))
    } else {
      this.visibleMarkers = [];
    }
  }

  toggleMarkers() {
    this.showMarkers = !this.showMarkers;
    this.updateMarkers();
  }

  openInfoWindow(marker: MapMarker) {
    let targetParcel = this.cityDataService.getParcelByLatLng(marker.getPosition());
    this.infoWindowContent.nativeElement.innerHTML = `<p>Latitude: ${targetParcel.geolocation.lat()}</p> <p>Longitude: ${targetParcel.geolocation.lng()}</p> <p>Year Built: ${targetParcel.yearBuilt}</p>`;
    this.infoWindow.open(marker);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.heatmap.setMap(this.gMap.data.getMap());
  }

  ngOnInit() {
  }
}
