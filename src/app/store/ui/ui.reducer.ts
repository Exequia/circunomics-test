import { createReducer, on } from '@ngrx/store';
import { setSelectedSpeakerId } from './ui.actions';

export interface UiState {
  selectedSpeakerId?: string;
}

const initialState: UiState = {};

export const uiReducer = createReducer(
  initialState,
  on(setSelectedSpeakerId, (state, action) => ({
    ...state,
    selectedSpeakerId: action.speakerId,
  }))
);
