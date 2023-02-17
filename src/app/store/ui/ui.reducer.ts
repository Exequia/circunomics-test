import { createReducer, on } from '@ngrx/store';
import { Filter, FilterForm } from 'src/app/models/filter';
import { Speaker } from '../speakers/speaker.model';
import {
  setCurrentPageNumber,
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
  itemsPerPage: number;
}

export const uiInitialState: UiState = { itemsPerPage: 20 };

export const uiReducer = createReducer(
  uiInitialState,
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
  })),
  on(setCurrentPageNumber, (state, action) => ({
    ...state,
    pageNumber: action.page,
  }))
);
