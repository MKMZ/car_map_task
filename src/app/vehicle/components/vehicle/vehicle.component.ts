import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from 'app/shared/common/meta.reducer';
import * as vehicleSelectors from 'app/vehicle/common/vehicle.selectors';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { TableDataSource } from 'app/shared/data-sources/table-data-source';
import { Observable } from 'rxjs/Observable';
import { MapLocation } from 'app/shared/models/map-location';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public lat: number;
  public lng: number;
  public vehicles: Observable<Vehicle[]>;
  public currLoc: Observable<MapLocation>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.vehicles = this.store.select(vehicleSelectors.vehicleData);
    this.currLoc = this.store.select(vehicleSelectors.getCurrLocation);
  }

}
