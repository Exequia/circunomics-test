import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSpeakersData } from './store/speakers/speaker.actions';
import { SpeakerState } from './store/speakers/speaker.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'circunomics-test';
}
