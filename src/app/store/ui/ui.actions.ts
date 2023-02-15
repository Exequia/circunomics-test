import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/models/filter';
import { Speaker } from '../speakers/speaker.model';

export const goToSpeakerDetail = createAction(
  '[UI] Go to Speaker Detail',
  props<{ speakerId: string }>()
);
export const setSelectedSpeakerId = createAction(
  '[UI] Set Selected Speaker',
  props<{ speakerId: string }>()
);
export const setLoading = createAction(
  '[UI] Set Loading',
  props<{ isLoading: boolean }>()
);
export const updateFilter = createAction(
  '[UI] Update Filter',
  props<{ filter: Filter }>()
);
export const setFilterSpeakers = createAction(
  '[UI] Set Filter Speakers',
  props<{ filterSpeakers: Speaker[] }>()
);
