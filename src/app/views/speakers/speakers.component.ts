import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectSpeakersAll,
  selectSpeakersEntities,
  SpeakerState,
} from 'src/app/store/speakers/speaker.reducer';
import { SpeakerListComponent } from 'src/app/components/speaker-list/speaker-list.component';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule, SpeakerListComponent],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {
  speakers$ = this.store.select(selectSpeakersAll);

  constructor(private readonly store: Store<SpeakerState>) {}
}
