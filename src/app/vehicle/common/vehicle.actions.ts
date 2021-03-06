import { Action } from '@ngrx/store';
import { Vehicle } from 'app/vehicle/models/vehicle';

export const VehicleActionTypes = {
    STOP_WAITING: '[Vehicle] Stop Waiting',
    LOAD_VEHICLES: '[Vehicle] Load Vehicles',
    LOADED_VEHICLES: '[Vehicle] Loaded Vehicles',
    UPDATE_CURR_LOC: '[Vehicle] Update Current Location',
    SELECT_VEHICLE: '[Vehicle] Select Vehicle'
};

export class LoadVehiclesAction implements Action {
    readonly type = VehicleActionTypes.LOAD_VEHICLES;
    constructor(public payload: Object) {
    }
}

export class LoadedVehiclesAction implements Action {
    readonly type = VehicleActionTypes.LOADED_VEHICLES;
    constructor(public payload: Vehicle[]) {
    }
}

export class StopWaitingAction implements Action {
    readonly type = VehicleActionTypes.STOP_WAITING;
    constructor(public payload: Object) {
    }
}

export class UpdateCurrLocAction implements Action {
    readonly type = VehicleActionTypes.UPDATE_CURR_LOC;
    constructor(public payload: Object) {
    }
}

export class SelectVehicleAction implements Action {
    readonly type = VehicleActionTypes.SELECT_VEHICLE;
    constructor(public payload: Object) {
    }
}

export type VehicleActions =
    LoadVehiclesAction |
    LoadedVehiclesAction |
    StopWaitingAction |
    UpdateCurrLocAction |
    SelectVehicleAction;
