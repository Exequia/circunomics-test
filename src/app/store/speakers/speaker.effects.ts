import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { SpeakerResponse } from 'src/app/models/speaker';
import { SpeakerUtilsService } from 'src/app/services/speaker-utils.service';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { AppState } from '../app/app.reducer';
import { setCurrentPageNumber, setLoading } from '../ui/ui.actions';
import { selectItemsPerPage } from '../ui/ui.selector';
import {
  fetchSpeakersData,
  getSpeakersData,
  getSpeakersDataFail,
  getSpeakersDataSuccess,
  loadSpeakers,
} from './speaker.actions';

@Injectable()
export class SpeakerEffects {
  getSpeakersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpeakersData),
      mergeMap((payload) => [
        setLoading({ isLoading: true }),
        setCurrentPageNumber({ page: payload?.page }),
        fetchSpeakersData({ page: payload?.page }),
      ])
    )
  );

  fetchSpeakersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchSpeakersData),
      withLatestFrom(this.store.select(selectItemsPerPage)),
      mergeMap(([payload, itemsPerPage]) =>
        this.speakerService.getSpeakers(itemsPerPage, payload?.page).pipe(
          map((speakersResponse: SpeakerResponse) => {
            if (!!speakersResponse.results) {
              const speakers = this.speakerUtils.cleanResponseResults(
                speakersResponse.results
              );
              return getSpeakersDataSuccess({
                speakers,
              });
            } else {
              return getSpeakersDataFail({ error: 'empty data' });
            }
          }),
          catchError((error) => of(getSpeakersDataFail({ error })))
        )
      )
    )
  );

  getSpeakersDataSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpeakersDataSuccess),
      mergeMap((payload) => [
        loadSpeakers({ speakers: payload.speakers }),
        setLoading({ isLoading: false }),
      ])
    )
  );

  getSpeakersDataFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpeakersDataFail),
      map((payload) => {
        console.error(payload.error);
        return setLoading({ isLoading: false });
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly speakerService: SpeakerService,
    private readonly speakerUtils: SpeakerUtilsService
  ) {}
}
