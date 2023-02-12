import { Injectable } from '@angular/core';
import { Speaker, SpeakerId } from '../store/speakers/speaker.model';

@Injectable({
  providedIn: 'root',
})
export class SpeakerUtilsService {
  constructor() {}

  cleanResponseResults(results: Speaker[] = []): Speaker[] {
    return results.map((speaker, index) => {
      const speakerId: SpeakerId = speaker?.id as SpeakerId;
      const cleanId: string = this.getCleanId(speaker?.id as SpeakerId, index);
      return { ...speaker, speakerId, id: cleanId };
    });
  }

  getCleanId(id: SpeakerId, index: number): string {
    return `${this.cleanString(id?.name, index)}_${this.cleanString(
      id?.value,
      index
    )}`;
  }

  cleanString(str: string | undefined | null, index: number): string {
    return !str ? index.toString() : str.trim().replace(/ /g, '');
  }
}
