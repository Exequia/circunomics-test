import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerDetailComponent } from 'src/app/components/speaker-detail/speaker-detail.component';
import { Store } from '@ngrx/store';
import { selectSpeakerId } from 'src/app/store/ui/ui.selector';
import { AppState } from 'src/app/store/app/app.reducer';
import { take, filter, Observable } from 'rxjs';
import { selectSpeakerById } from 'src/app/store/speakers/speaker.selectors';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker',
  standalone: true,
  imports: [CommonModule, SpeakerDetailComponent],
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent implements OnInit {
  speaker$: Observable<Speaker | undefined> | undefined;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.store
      .select(selectSpeakerId)
      .pipe(
        filter((speakerId) => !!speakerId),
        take(1)
      )
      .subscribe(
        (speakerId) =>
          (this.speaker$ = this.store.select(selectSpeakerById(speakerId!)))
      );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
