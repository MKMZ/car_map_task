import * as vehicleActions from 'app/vehicle/common/vehicle.actions';
import { Vehicle } from 'app/vehicle/models/vehicle';



export interface VehicleState {
    awaitingSize: number;
    vehicles: Vehicle[];
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
        default:
            return state;
    }
}

const initialState: VehicleState = {
    awaitingSize: 0,
    vehicles: null
};

export const isAwaitingVehicles = (state: VehicleState) => state.awaitingSize > 0;
export const vehicleData = (state: VehicleState) => state.vehicles;
