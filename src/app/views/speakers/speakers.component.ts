import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectSpeakersAll,
  SpeakerState,
} from 'src/app/store/speakers/speaker.reducer';
import { SpeakerListComponent } from 'src/app/components/speaker-list/speaker-list.component';
import { isLoading } from 'src/app/store/ui/ui.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app/app.reducer';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule, SpeakerListComponent],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent {
  speakers$ = this.store.select(selectSpeakersAll);
  loading$: Observable<boolean> = this.store.select(isLoading);

  constructor(private readonly store: Store<AppState>) {}
}
