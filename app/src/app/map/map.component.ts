import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  longitude=-85.6681
  latitude=42.9634
  constructor() { }

  ngOnInit() {
   
  }

}
