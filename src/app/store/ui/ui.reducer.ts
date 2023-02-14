import { createReducer, on } from '@ngrx/store';
import { setLoading, setSelectedSpeakerId } from './ui.actions';

export interface UiState {
  selectedSpeakerId?: string;
  isLoading?: boolean;
}

const initialState: UiState = {};

export const uiReducer = createReducer(
  initialState,
  on(setSelectedSpeakerId, (state, action) => ({
    ...state,
    selectedSpeakerId: action.speakerId,
  })),
  on(setLoading, (state, action) => ({
    ...state,
    isLoading: action.isLoading,
  }))
);
