import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { SpeakerSummaryComponent } from '../speaker-summary/speaker-summary.component';

@Component({
  selector: 'app-speaker-list',
  standalone: true,
  imports: [CommonModule, SpeakerSummaryComponent],
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss'],
})
export class SpeakerListComponent {
  @Input() speakers: Speaker[] | null = null;
}
