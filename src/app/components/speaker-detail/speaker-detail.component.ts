import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { SpeakerMainComponent } from '../speaker-main/speaker-main.component';
import { SpeakerContactComponent } from '../speaker-contact/speaker-contact.component';
import { SpeakerLocationComponent } from '../speaker-location/speaker-location.component';

@Component({
  selector: 'app-speaker-detail',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    SpeakerMainComponent,
    SpeakerContactComponent,
    SpeakerLocationComponent,
  ],
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
})
export class SpeakerDetailComponent {
  @Input() speaker: Speaker | null | undefined;

  getImgSrc(): string {
    return this.speaker?.picture?.large || '';
  }
}
