import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromRouterStore from '@ngrx/router-store';
import * as fromVehicle from 'app/vehicle/common/vehicle.reducer';


export interface AppState {
    vehicle: fromVehicle.VehicleState;
    router: fromRouterStore.RouterReducerState;
}

export const reducers = {
    vehicle: fromVehicle.reducer,
    router: fromRouterStore.routerReducer
};

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

