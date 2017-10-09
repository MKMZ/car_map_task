import { AppState } from 'app/shared/common/meta.reducer';
import { createSelector } from 'reselect';
import * as fromVehicle from 'app/vehicle/common/vehicle.reducer';


export const getVehicleState = (state: AppState) => state.vehicle;

export const isAwaitingVehicles = createSelector(getVehicleState, fromVehicle.isAwaitingVehicles);
export const vehicleData = createSelector(getVehicleState, fromVehicle.vehicleData);
export const getCurrLocation = createSelector(getVehicleState, fromVehicle.getCurrLocation);
export const getSelectedVehicle = createSelector(getVehicleState, fromVehicle.getSelectedVehicle);
