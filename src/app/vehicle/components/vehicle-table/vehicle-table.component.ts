import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MdPaginator, MdSort } from '@angular/material';
import { TableDataSource } from 'app/shared/data-sources/table-data-source';
import { TableColumn } from 'app/shared/models/table-column';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  @Input() vehicles: Observable<Vehicle[]>;

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  public dataSource: TableDataSource<Vehicle>;
  public displayColumns: TableColumn[] | null;
  public columnKeys: String[] | null;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new TableDataSource<Vehicle>(
      this.vehicles,
      this.paginator,
      this.sort,
      ['name', 'platesNumber', 'sideNumber', 'type', 'rangeKm', 'batteryLevelPct', 'status']
    );
    this.displayColumns = [
      new TableColumn('Name', 'name'),
      // new TableColumn('Description', 'description'),
      new TableColumn('Plates Number', 'platesNumber'),
      new TableColumn('Side Number', 'sideNumber'),
      new TableColumn('Type', 'type'),
      new TableColumn('Range [km]', 'rangeKm'),
      new TableColumn('Battery Level', 'batteryLevelPct'),
      new TableColumn('Status', 'status')
    ];
    this.columnKeys = this.displayColumns.map(item => item.key);
  }

}
