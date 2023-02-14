import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Speaker } from './speaker.model';
import * as SpeakerActions from './speaker.actions';

export const speakersFeatureKey = 'speakers';
export const selectGamePlayerState =
  createFeatureSelector<SpeakerState>(speakersFeatureKey);

export interface SpeakerState extends EntityState<Speaker> {
  // additional entities state properties
}

export const speakerAdapter: EntityAdapter<Speaker> =
  createEntityAdapter<Speaker>();

export const initialState: SpeakerState = speakerAdapter.getInitialState({
  // additional entity state properties
});

export const speakerReducer = createReducer(
  initialState,
  on(SpeakerActions.addSpeaker, (state, action) =>
    speakerAdapter.addOne(action.speaker, state)
  ),
  on(SpeakerActions.upsertSpeaker, (state, action) =>
    speakerAdapter.upsertOne(action.speaker, state)
  ),
  on(SpeakerActions.addSpeakers, (state, action) =>
    speakerAdapter.addMany(action.speakers, state)
  ),
  on(SpeakerActions.upsertSpeakers, (state, action) =>
    speakerAdapter.upsertMany(action.speakers, state)
  ),
  on(SpeakerActions.updateSpeaker, (state, action) =>
    speakerAdapter.updateOne(action.speaker, state)
  ),
  on(SpeakerActions.updateSpeakers, (state, action) =>
    speakerAdapter.updateMany(action.speakers, state)
  ),
  on(SpeakerActions.deleteSpeaker, (state, action) =>
    speakerAdapter.removeOne(action.id, state)
  ),
  on(SpeakerActions.deleteSpeakers, (state, action) =>
    speakerAdapter.removeMany(action.ids, state)
  ),
  on(SpeakerActions.loadSpeakers, (state, action) =>
    speakerAdapter.setAll(action.speakers, state)
  ),
  on(SpeakerActions.clearSpeakers, (state) => speakerAdapter.removeAll(state))
);

export const {
  selectEntities: selectSpeakersEntities,
  selectAll: selectSpeakersAll,
} = speakerAdapter.getSelectors(selectGamePlayerState);
