import { createSelector } from '@ngrx/store';
import { selectSpeakersEntities } from './speaker.reducer';

export const selectSpeakerById = (speakerId: string) =>
  createSelector(selectSpeakersEntities, (entities) => entities[speakerId]);
