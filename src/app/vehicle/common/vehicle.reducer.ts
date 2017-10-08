import * as vehicleActions from 'app/vehicle/common/vehicle.actions';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';



export interface VehicleState {
    awaitingSize: number;
    vehicles: Vehicle[];
    currLocation: MapLocation;
}

export function reducer(state = initialState, action: vehicleActions.VehicleActions): VehicleState {
    switch (action.type) {
        case vehicleActions.VehicleActionTypes.STOP_WAITING: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize - 1
            });
        }
        case vehicleActions.VehicleActionTypes.LOAD_VEHICLES: {
            return Object.assign({}, state, {
                awaitingSize: state.awaitingSize + 1
            });
        }
        case vehicleActions.VehicleActionTypes.LOADED_VEHICLES: {
            return Object.assign({}, state, {
                vehicles: action.payload,
                awaitingSize: state.awaitingSize - 1
            });
        }
        case vehicleActions.VehicleActionTypes.UPDATE_CURR_LOC: {
            return Object.assign({}, state, {
                currLocation: action.payload
            });
        }
        default:
            return state;
    }
}

const initialState: VehicleState = {
    awaitingSize: 0,
    vehicles: null,
    currLocation: null
};

export const isAwaitingVehicles = (state: VehicleState) => state.awaitingSize > 0;
export const vehicleData = (state: VehicleState) => state.vehicles;
export const getCurrLocation = (state: VehicleState) => state.currLocation;

