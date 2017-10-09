import { Component, Input, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';
import { AgmMap } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';
import { VehiclePanelComponent } from 'app/vehicle/components/abstracts/vehicle-panel.component';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent extends VehiclePanelComponent implements AfterViewInit, OnDestroy {

  @Input() vehicles: Vehicle[];
  @Input() currLoc: Observable<MapLocation>;
  @Input() selectedVehicle: Observable<Vehicle>;

  @ViewChild(AgmMap) agmMap: AgmMap;

  public selectedMarker: Vehicle;
  private onLocChanged: Subscription;

  constructor() {
    super();
   }

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
    this.subSelected = this.selectedVehicle.subscribe(vehicle => {
      this.selectedMarker = vehicle;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.onLocChanged.unsubscribe();
  }


}
