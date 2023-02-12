import { Speaker } from '../store/speakers/speaker.model';

export interface SpeakerResponse {
  info?: SpeakerResponseInfo;
  results?: Speaker[];
}

export interface SpeakerResponseInfo {
  page?: number;
  results?: number;
  seed?: string;
  version?: string;
}
