import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectSpeakersAll,
  selectSpeakersEntities,
  SpeakerState,
} from 'src/app/store/speakers/speaker.reducer';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {
  speakers$ = this.store.select(selectSpeakersEntities);

  constructor(private readonly store: Store<SpeakerState>) {
    // this.speakers$?.subscribe((data) => console.log(data));
    setTimeout(() => {
      this.store
        .select(selectSpeakersEntities)
        ?.subscribe((data) => console.log(data));
    }, 500);
    this.store
      .select(selectSpeakersAll)
      ?.subscribe((data) => console.log(data));
  }
}
