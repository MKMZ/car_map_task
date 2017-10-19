import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from 'app/shared/data-sources/table-data-source';
import { TableColumn } from 'app/shared/models/table-column';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { VehiclePanelComponent } from 'app/vehicle/components/abstracts/vehicle-panel.component';


@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent extends VehiclePanelComponent implements OnInit, OnDestroy {

  @Input() vehicles: Observable<Vehicle[]>;
  @Input() selectedVehicle: Observable<Vehicle>;
  @Output() selectVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource: TableDataSource<Vehicle>;
  public displayColumns: TableColumn[] | null;
  public columnKeys: String[] | null;



  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dataSource = new TableDataSource<Vehicle>(
      this.vehicles,
      this.paginator,
      this.sort,
      ['name', 'platesNumber', 'sideNumber', 'type', 'rangeKm', 'batteryLevelPct', 'status']
    );
    this.displayColumns = [
      new TableColumn('Name', 'name'),
      new TableColumn('Plates Number', 'platesNumber'),
      new TableColumn('Side Number', 'sideNumber'),
      new TableColumn('Type', 'type'),
      new TableColumn('Range [km]', 'rangeKm'),
      new TableColumn('Battery Level', 'batteryLevelPct'),
      new TableColumn('Status', 'status')
    ];
    this.columnKeys = this.displayColumns.map(item => item.key);

    this.subSelected = this.selectedVehicle.subscribe(vehicle => this.selectedValue = vehicle);
  }

}
