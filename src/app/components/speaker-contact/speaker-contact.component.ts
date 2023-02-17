import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';

@Component({
  selector: 'app-speaker-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speaker-contact.component.html',
  styleUrls: ['./speaker-contact.component.scss'],
})
export class SpeakerContactComponent {
  @Input() speaker: Speaker | null | undefined;
}
