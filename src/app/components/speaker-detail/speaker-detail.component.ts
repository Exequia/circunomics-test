import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';

@Component({
  selector: 'app-speaker-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
})
export class SpeakerDetailComponent {
  @Input() speaker: Speaker | null | undefined;
}
