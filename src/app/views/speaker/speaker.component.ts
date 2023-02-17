import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerDetailComponent } from 'src/app/components/speaker-detail/speaker-detail.component';
import { Store } from '@ngrx/store';
import { selectSpeakerId } from 'src/app/store/ui/ui.selector';
import { AppState } from 'src/app/store/app/app.reducer';

@Component({
  selector: 'app-speaker',
  standalone: true,
  imports: [CommonModule, SpeakerDetailComponent],
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {
  speakerId$ = this.store.select(selectSpeakerId);

  constructor(private readonly store: Store<AppState>) {}
}
