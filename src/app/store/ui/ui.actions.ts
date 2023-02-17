import { createAction, props } from '@ngrx/store';

export const goToSpeakerDetail = createAction(
  '[UI] Go to Speaker Detail',
  props<{ speakerId: string }>()
);
export const setSelectedSpeakerId = createAction(
  '[UI] Set Selected Speaker',
  props<{ speakerId: string }>()
);
