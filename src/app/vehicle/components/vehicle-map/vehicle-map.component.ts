import { Component, Input, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';
import { AgmMap } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';
import { VehiclePanelComponent } from 'app/vehicle/components/abstracts/vehicle-panel.component';
import { VehicleMarkerIcon } from 'app/vehicle/types/vehicle-marker-icon';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent extends VehiclePanelComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() vehicles: Vehicle[];
  @Input() currLoc: Observable<MapLocation>;
  @Input() selectedVehicle: Observable<Vehicle>;

  @ViewChild(AgmMap) agmMap: AgmMap;

  public markerColors = VehicleMarkerIcon;
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
      if (vehicle) {
        this.selectedValue = vehicle;
        this.agmMap.latitude = vehicle.location.latitude;
        this.agmMap.longitude = vehicle.location.longitude;
        this.agmMap.triggerResize();
      }
    });
  }

  ngAfterViewChecked(): void {
    this.agmMap.triggerResize();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.onLocChanged.unsubscribe();
  }


}
