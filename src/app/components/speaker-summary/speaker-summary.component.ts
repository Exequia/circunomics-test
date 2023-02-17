import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { AppState } from 'src/app/store/speakers/speaker.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-speaker-summary',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './speaker-summary.component.html',
  styleUrls: ['./speaker-summary.component.scss'],
})
export class SpeakerSummaryComponent {
  @Input() speaker: Speaker | null = null;

  constructor(private readonly store: Store<AppState>) {}

  select() {
    // TODO: ARE - NAVIGATE;
    // this.store.dispatch(goToDetail({ speaker: this.speaker }));
  }

  getImgSrc(): string {
    return this.speaker?.picture?.thumbnail || '';
  }

  getFullName(): string {
    let name = '';
    const { first, last, title } = this.speaker?.name || {};
    if (title) {
      name += `${title} `;
    }
    if (first && last) {
      name += `${last}, ${first}`;
    } else {
      name += first || last;
    }
    return name;
  }
}
