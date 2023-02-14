import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DetailWrapperComponent } from '../detail-wrapper/detail-wrapper.component';
import { Speaker } from 'src/app/store/speakers/speaker.model';

@Component({
  selector: 'app-speaker-main',
  standalone: true,
  imports: [CommonModule, DetailWrapperComponent, NgOptimizedImage],
  templateUrl: './speaker-main.component.html',
  styleUrls: ['./speaker-main.component.scss'],
})
export class SpeakerMainComponent {
  @Input() speaker: Speaker | null | undefined;

  getImgSrc(): string {
    return this.speaker?.picture?.large || '';
  }

  getDate(strDate: string | undefined): Date {
    return new Date(strDate || '');
  }
}
