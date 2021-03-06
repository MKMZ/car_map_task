import * as vehicleActions from 'app/vehicle/common/vehicle.actions';
import { Vehicle } from 'app/vehicle/models/vehicle';
import { MapLocation } from 'app/shared/models/map-location';



export interface VehicleState {
    awaitingSize: number;
    vehicles: Vehicle[];
    currLocation: MapLocation;
    selectedVehicle: Vehicle;
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
        case vehicleActions.VehicleActionTypes.SELECT_VEHICLE: {
            if (!state.selectedVehicle ||
                (action.payload && state.selectedVehicle.id !== (<Vehicle> action.payload).id)) {
                return Object.assign({}, state, {
                    selectedVehicle: action.payload
                });
            }
            return Object.assign({}, state, {
                selectedVehicle: null
            });
        }
        default:
            return state;
    }
}

const initialState: VehicleState = {
    awaitingSize: 0,
    vehicles: null,
    currLocation: null,
    selectedVehicle: null
};

export const isAwaitingVehicles = (state: VehicleState) => state.awaitingSize > 0;
export const vehicleData = (state: VehicleState) => state.vehicles;
export const getCurrLocation = (state: VehicleState) => state.currLocation;
export const getSelectedVehicle = (state: VehicleState) => state.selectedVehicle;
