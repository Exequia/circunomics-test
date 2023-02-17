import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SpeakerResponse } from 'src/app/models/speaker';
import { SpeakerUtilsService } from 'src/app/services/speaker-utils.service';
import { SpeakerService } from 'src/app/services/speaker/speaker.service';
import { setLoading } from '../ui/ui.actions';
import {
  addSpeakers,
  fetchSpeakersData,
  getSpeakersData,
  getSpeakersDataFail,
  getSpeakersDataSuccess,
} from './speaker.actions';

@Injectable()
export class SpeakerEffects {
  getSpeakersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpeakersData),
      mergeMap(() => [setLoading({ isLoading: true }), fetchSpeakersData()])
    )
  );

  fetchSpeakersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchSpeakersData),
      mergeMap(() =>
        this.speakerService.getSpeakers().pipe(
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
        addSpeakers({ speakers: payload.speakers }),
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
    private readonly speakerService: SpeakerService,
    private readonly speakerUtils: SpeakerUtilsService
  ) {}
}
