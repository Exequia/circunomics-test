import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { SpeakerResponse } from 'src/app/models/speaker';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  constructor(private http: HttpClient) {}

  getSpeakers(
    results: number = 20,
    page: number = 1
  ): Observable<SpeakerResponse> {
    return this.http.get<SpeakerResponse>(
      `https://randomuser.me/api/?results=${results}&page=${page}`
    );
  }
}
