import { Component, Input, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent implements AfterViewInit {

  @Input() vehicles: Observable<Vehicle[]>;
  @Input() currLoc: Observable<MapLocation>;
  @ViewChild(AgmMap) agmMap: AgmMap;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.agmMap && this.currLoc) {
      this.currLoc.subscribe(loc => {
        if (loc) {
          this.agmMap.longitude = loc.longitude;
          this.agmMap.latitude = loc.latitude;
          this.agmMap.triggerResize();
        }
      });
    }
  }

}
