import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { VehicleRepository } from 'app/vehicle/vehicle.repository';
import * as routerActions from '@ngrx/router-store';
import * as vehicleAcions from 'app/vehicle/common/vehicle.actions';
import { RoutePaths } from 'app/shared/common/route-paths';


@Injectable()
export class VehicleEffects {
    constructor(
        private actions$: Actions,
        private vehicleRepository: VehicleRepository
    ) {}

    @Effect()
    routerChange$: Observable<Action>  = this.actions$
        .ofType(routerActions.ROUTER_NAVIGATION)
        .map(toPayload)
        .switchMap(payload => {
            switch (payload.routerState.url) {
                case '/' + RoutePaths.VEHICLES: {
                    return Observable.of(new vehicleAcions.LoadVehiclesAction({}));
                }
                default:
                    return Observable.of({type: ''});
            }
        });

    @Effect()
    loadPosts$: Observable<Action> = this.actions$
        .ofType(vehicleAcions.VehicleActionTypes.LOAD_VEHICLES)
        .map(toPayload)
        .switchMap(payload => {
            return this.vehicleRepository.getCarMap()
                .map(res => {
                    return new vehicleAcions.LoadedVehiclesAction(res);
                })
                .catch((error) => {
                //   this.notificationsService.error('Error during the process of getting Posts');
                    return Observable.of(new vehicleAcions.StopWaitingAction({}));
                });
        });

        @Effect()
        updateCurrLocation$: Observable<Action> = this.actions$
            .ofType(vehicleAcions.VehicleActionTypes.LOAD_VEHICLES)
            .map(toPayload)
            .switchMap(payload => {
                if ('geolocation' in navigator) {
                    return Observable.create(observer => navigator.geolocation
                        .getCurrentPosition(position => {
                            observer.next(new vehicleAcions.UpdateCurrLocAction(position.coords));
                            observer.complete();
                        }));
                }
                return Observable.of({type: ''});
            });


}
