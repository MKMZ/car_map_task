import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatTableModule, MatPaginatorModule, 
  MatSortModule, MatToolbarModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';

import {StoreModule} from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from 'app/app.component';
import { routes } from 'app/shared/common/routes';
import { reducers } from 'app/shared/common/meta.reducer';
import { HomeComponent } from 'app/home/components/home.component';
import { VehicleMapComponent } from 'app/vehicle/components/vehicle-map/vehicle-map.component';
import { VehicleTableComponent } from 'app/vehicle/components/vehicle-table/vehicle-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleMapComponent,
    VehicleTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
