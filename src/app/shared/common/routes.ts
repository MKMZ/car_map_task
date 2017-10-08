import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'app/errors/components/page-not-found/page-not-found.component';
import { RoutePaths } from 'app/shared/common/route-paths';
import { VehicleComponent } from 'app/vehicle/components/vehicle/vehicle.component';
import { HomeComponent } from 'app/home/components/home.component';

export const routes: Routes = [
    { path: RoutePaths.VEHICLES, component: VehicleComponent },
    {
      path: RoutePaths.HOME,
      component: HomeComponent
    },
    { path: '',
      redirectTo: RoutePaths.HOME,
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
