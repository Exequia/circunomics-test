import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { goToSpeakerDetail, setSelectedSpeakerId } from './ui.actions';

@Injectable()
export class UiEffects {
  goToSpeakerDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goToSpeakerDetail),
      map((payload) => {
        this.router.navigate(['/detail']);
        return setSelectedSpeakerId({ speakerId: payload.speakerId });
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}
}
