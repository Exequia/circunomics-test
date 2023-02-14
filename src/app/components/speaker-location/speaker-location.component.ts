import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailWrapperComponent } from '../detail-wrapper/detail-wrapper.component';
import { Speaker } from 'src/app/store/speakers/speaker.model';

@Component({
  selector: 'app-speaker-location',
  standalone: true,
  imports: [CommonModule, DetailWrapperComponent],
  templateUrl: './speaker-location.component.html',
  styleUrls: ['./speaker-location.component.scss'],
})
export class SpeakerLocationComponent {
  @Input() speaker: Speaker | null | undefined;
}
