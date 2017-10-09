import { Component, Input, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';
import { AgmMap } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent implements AfterViewInit, OnDestroy {

  @Input() vehicles: Vehicle[];
  @Input() currLoc: Observable<MapLocation>;
  @ViewChild(AgmMap) agmMap: AgmMap;

  private onLocChanged: Subscription;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.agmMap && this.currLoc) {
      this.onLocChanged = this.currLoc.subscribe(loc => {
        if (loc) {
          this.agmMap.longitude = loc.longitude;
          this.agmMap.latitude = loc.latitude;
          this.agmMap.triggerResize();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.onLocChanged.unsubscribe();
  }

  onMarkerClicked(marker) {
    console.log("onMarkerClicked");
    console.log(marker);
  }

}
