import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';


export interface AppState {

}

export const reducers = {

};

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);
