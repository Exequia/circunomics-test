import { createReducer, on } from '@ngrx/store';
import { Filter, FilterForm } from 'src/app/models/filter';
import { Speaker } from '../speakers/speaker.model';
import {
  setFilterSpeakers,
  setLoading,
  setSelectedSpeakerId,
  updateFilter,
} from './ui.actions';

export interface UiState {
  selectedSpeakerId?: string;
  isLoading?: boolean;
  filter?: Filter;
  filterSpeakers?: Speaker[];
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
  })),
  on(updateFilter, (state, action) => ({
    ...state,
    filter: action.filter,
  })),
  on(setFilterSpeakers, (state, action) => ({
    ...state,
    filterSpeakers: action.filterSpeakers,
  }))
);
