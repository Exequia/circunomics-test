import { createSelector } from '@ngrx/store';
import { uiFeature } from '../app/app.reducer';

export const selectSpeakerId = createSelector(
  uiFeature,
  (uiState) => uiState?.selectedSpeakerId
);
export const isLoading = createSelector(
  uiFeature,
  (uiState) => uiState?.isLoading || false
);
