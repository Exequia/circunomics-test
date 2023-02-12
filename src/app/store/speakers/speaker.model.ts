export interface Speaker {
  gender?: string;
  name?: SpeakerName;
  location?: SpeakerLocation;
  email?: string;
  login?: SpeakerLogin;
  dob?: SpeakerDOB;
  registered?: SpeakerRegistered;
  phone?: string;
  cell?: string;
  id?: SpeakerId | string;
  speakerId?: SpeakerId;
  picture?: SpeakerPicture;
  nat?: string;
}
export interface SpeakerName {
  title?: string;
  first?: string;
  last?: string;
}
export interface SpeakerLocation {
  street?: SpeakerLocationStreet;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string | number;
  coordinates?: SpeakerLocationCoordinates;
  timezone?: SpeakerLocationTimezone;
}
export interface SpeakerLocationStreet {
  number?: number;
  name?: string;
}
export interface SpeakerLocationCoordinates {
  latitude?: string;
  longitude?: string;
}
export interface SpeakerLocationTimezone {
  offset?: string;
  description?: string;
}
export interface SpeakerLogin {
  uuid?: string;
  username?: string;
  password?: string;
  salt?: string;
  md5?: string;
  sha1?: string;
  sha256?: string;
}
export interface SpeakerDate {
  date?: string;
  age?: number;
}
export interface SpeakerDOB extends SpeakerDate {}
export interface SpeakerRegistered extends SpeakerDate {}
export interface SpeakerId {
  name?: string;
  value?: string | undefined | null;
}
export interface SpeakerPicture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}
