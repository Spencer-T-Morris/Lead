import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CityDataService } from '../city-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {
  // HTML elements
  @ViewChild('googleMap') gMap: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild('infoWindowContent') infoWindowContent: ElementRef;
  @ViewChild('searchError') searchError: ElementRef;

  // Marker vars
  showMarkers = true;
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLng[] = [];
  markerAddresses: string[] = [];

  // Map vars
  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  geocoder = new google.maps.Geocoder();
  initZoom = 11;
  mapHeight: string = "75vh";
  mapWidth: string = "90vw";
  showSearchError: Boolean = false;

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

  // Data loading event handlers
  dataLoadChange = this.cityDataService.dataLoadChange.subscribe((isLoaded: boolean) => {
    if (isLoaded) {
      this.loadHeatmap();
    }
  })

  constructor(public cityDataService: CityDataService) { }

  focusOnAddress(address: string) {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        if (this.gMap === undefined) {
          console.log('gMap is undefined');
        } else {
          // Adding marker location & address
          this.markerPositions.push(results[0].geometry.location);
          this.markerAddresses.push(address);
          // Clear search error
          this.searchError.nativeElement.innerText = "";
          // Center map
          this.gMap.center = results[0].geometry.location;
          this.gMap.zoom = 18;
        }
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        this.showSearchError = true;
        // Filtering for user-facing error
        // List of statuses: https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderStatus
        let errStr = 'ERROR';
        if (address == "") {
          errStr = "Please enter an address and try again."
        } else if (status === 'INVALID_REQUEST' ||
          status === 'UNKNOWN_ERROR' ||
          status === 'REQUEST_DENIED') {
          errStr = "Something went wrong. Please try again.";
        } else if (status === 'OVER_QUERY_LIMIT') {
          errStr = "Too many searches were made too quickly. Please wait a bit then try again.";
        } else if (status === 'ZERO_RESULTS') {
          errStr = "No results were found. Please try again.";
        }
        this.searchError.nativeElement.innerText = errStr;
      }
    });
  }

  openInfoWindow(marker: MapMarker) {
    let markerIndex = this.markerPositions.findIndex(m => m.equals(marker.getPosition()));
    let infoStr = `<p>Latitude: ${marker.getPosition().lat()}</p>
    <p>Longitude: ${marker.getPosition().lng()}</p>`;
    // Adding address if matching marker is found
    if (markerIndex != -1) {
      infoStr = `<p>Address: ${this.markerAddresses[markerIndex]}</p>` + infoStr;
    }

    this.infoWindowContent.nativeElement.innerHTML = infoStr;
    this.infoWindow.open(marker);
  }

  loadHeatmap() {
    this.heatmap.setData(this.cityDataService.getGeolocations());
    this.heatmap.setMap(this.gMap.data.getMap());
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.heatmap != undefined && this.gMap != undefined) {
      this.loadHeatmap();
    }
  }

  ngOnInit() {
  }
}
