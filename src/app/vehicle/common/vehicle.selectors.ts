import { AppState } from 'app/shared/common/meta.reducer';
import { createSelector } from 'reselect';
import * as fromVehicle from 'app/vehicle/common/vehicle.reducer';


export const getContentState = (state: AppState) => state.vehicle;

export const isAwaitingVehicles = createSelector(getContentState, fromVehicle.isAwaitingVehicles);
export const vehicleData = createSelector(getContentState, fromVehicle.vehicleData);
