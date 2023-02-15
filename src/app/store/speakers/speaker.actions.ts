import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Speaker } from './speaker.model';

export const loadSpeakers = createAction(
  '[Speaker/API] Load Speakers',
  props<{ speakers: Speaker[] }>()
);

export const addSpeaker = createAction(
  '[Speaker/API] Add Speaker',
  props<{ speaker: Speaker }>()
);

export const upsertSpeaker = createAction(
  '[Speaker/API] Upsert Speaker',
  props<{ speaker: Speaker }>()
);

export const addSpeakers = createAction(
  '[Speaker/API] Add Speakers',
  props<{ speakers: Speaker[] }>()
);

export const upsertSpeakers = createAction(
  '[Speaker/API] Upsert Speakers',
  props<{ speakers: Speaker[] }>()
);

export const updateSpeaker = createAction(
  '[Speaker/API] Update Speaker',
  props<{ speaker: Update<Speaker> }>()
);

export const updateSpeakers = createAction(
  '[Speaker/API] Update Speakers',
  props<{ speakers: Update<Speaker>[] }>()
);

export const deleteSpeaker = createAction(
  '[Speaker/API] Delete Speaker',
  props<{ id: string }>()
);

export const deleteSpeakers = createAction(
  '[Speaker/API] Delete Speakers',
  props<{ ids: string[] }>()
);

export const clearSpeakers = createAction('[Speaker/API] Clear Speakers');

const getSpeakers = '[Speaker/API] Get Speakers API Data';
export const getSpeakersData = createAction(
  getSpeakers,
  props<{ page: number }>()
);
export const fetchSpeakersData = createAction(
  `${getSpeakers} Fetch`,
  props<{ page: number }>()
);
export const getSpeakersDataSuccess = createAction(
  `${getSpeakers} success`,
  props<{ speakers: Speaker[] }>()
);
export const getSpeakersDataFail = createAction(
  `${getSpeakers} fail`,
  props<{ error: string }>()
);
