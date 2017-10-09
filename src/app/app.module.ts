import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';

import {StoreModule} from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from 'app/app.component';
import { routes } from 'app/shared/common/routes';
import { reducers } from 'app/shared/common/meta.reducer';
import { HomeComponent } from 'app/home/components/home.component';
import { VehicleMapComponent } from 'app/vehicle/components/vehicle-map/vehicle-map.component';
import { VehicleTableComponent } from 'app/vehicle/components/vehicle-table/vehicle-table.component';
import { PageNotFoundComponent } from 'app/errors/components/page-not-found/page-not-found.component';
import { VehicleComponent } from 'app/vehicle/components/vehicle/vehicle.component';
import { VehicleEffects } from 'app/vehicle/common/vehicle.effects';
import { VehicleRepository } from 'app/vehicle/vehicle.repository';
import { HttpModule } from '@angular/http';
import { KeysPipe } from 'app/shared/pipes/keys-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleMapComponent,
    VehicleTableComponent,
    PageNotFoundComponent,
    VehicleComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    FlexLayoutModule,
    CdkTableModule,
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
      VehicleEffects
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpt1h-z_m9R4pf6UIrDYk1uQiyY7_U9cs'
    })
  ],
  providers: [
    VehicleRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
