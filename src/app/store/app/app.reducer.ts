import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { speakerReducer, SpeakerState } from '../speakers/speaker.reducer';
import { uiReducer, UiState } from '../ui/ui.reducer';
import { isDevMode } from '@angular/core';

export interface AppState {
  ui: UiState;
  speakers: SpeakerState;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  speakers: speakerReducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];

export const uiFeature = (state: AppState) => state.ui;
