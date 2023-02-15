import { AppState } from 'src/app/store/app/app.reducer';
import { SpeakerState } from 'src/app/store/speakers/speaker.reducer';
import { UiState } from 'src/app/store/ui/ui.reducer';

export const uiInitialStateMock: UiState = { itemsPerPage: 20 };
export const speakerInitialStateMock: SpeakerState = {
  ids: [],
  entities: {},
};
export const initialStateMock: AppState = {
  ui: uiInitialStateMock,
  speakers: speakerInitialStateMock,
};
