import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public lat: number;
  public lng: number;
  constructor() { }

  ngOnInit() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

}
