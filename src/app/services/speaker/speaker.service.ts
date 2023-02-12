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

    // const data: SpeakerResponse = {
    //   results: [
    //     {
    //       gender: 'female',
    //       name: {
    //         title: 'Ms',
    //         first: 'Vicky',
    //         last: 'Watts',
    //       },
    //       location: {
    //         street: {
    //           number: 1660,
    //           name: 'Queen Street',
    //         },
    //         city: 'Wells',
    //         state: 'County Fermanagh',
    //         country: 'United Kingdom',
    //         postcode: 'T06 6JW',
    //         coordinates: {
    //           latitude: '-9.3533',
    //           longitude: '58.0799',
    //         },
    //         timezone: {
    //           offset: '+8:00',
    //           description: 'Beijing, Perth, Singapore, Hong Kong',
    //         },
    //       },
    //       email: 'vicky.watts@example.com',
    //       login: {
    //         uuid: 'ffbd2ae3-e1d3-4ab0-82b7-ca11edcd8ba5',
    //         username: 'lazyrabbit668',
    //         password: 'poppy',
    //         salt: 'e1oORaXk',
    //         md5: '94d1d3b367190083f84fa60ce91d876d',
    //         sha1: '33ffc756f297505daf48e8a6d760fd4384108ee8',
    //         sha256:
    //           'c3123d4fa0db89bdaa5893ae500568a80893604a5b6f6df22494add706aec8e6',
    //       },
    //       dob: {
    //         date: '1951-06-29T22:55:02.383Z',
    //         age: 71,
    //       },
    //       registered: {
    //         date: '2004-03-28T09:56:22.054Z',
    //         age: 18,
    //       },
    //       phone: '019467 74108',
    //       cell: '07948 475997',
    //       id: {
    //         name: 'NINO',
    //         value: 'WY 78 00 70 T',
    //       },
    //       picture: {
    //         large: 'https://randomuser.me/api/portraits/women/87.jpg',
    //         medium: 'https://randomuser.me/api/portraits/med/women/87.jpg',
    //         thumbnail: 'https://randomuser.me/api/portraits/thumb/women/87.jpg',
    //       },
    //       nat: 'GB',
    //     },
    //     {
    //       gender: 'male',
    //       name: {
    //         title: 'Mr',
    //         first: 'Solovey',
    //         last: 'Beregoviy',
    //       },
    //       location: {
    //         street: {
    //           number: 5243,
    //           name: 'Sadoviy provulok',
    //         },
    //         city: 'Mena',
    //         state: 'Odeska',
    //         country: 'Ukraine',
    //         postcode: 87926,
    //         coordinates: {
    //           latitude: '-79.2253',
    //           longitude: '-154.0863',
    //         },
    //         timezone: {
    //           offset: '-11:00',
    //           description: 'Midway Island, Samoa',
    //         },
    //       },
    //       email: 'solovey.beregoviy@example.com',
    //       login: {
    //         uuid: 'b88d370b-c61b-4a1b-a8b6-b8bbd75de254',
    //         username: 'ticklishgoose774',
    //         password: 'kipper',
    //         salt: 'l3aM0HRS',
    //         md5: '78ceba52eb2cdbc213ee13be3e10f866',
    //         sha1: 'da69e8572b049786aee013dc50a16a88158361df',
    //         sha256:
    //           '43677e5b29e25048e96036c1fb9602d6648af07629bbd30a65c246827fe40c2b',
    //       },
    //       dob: {
    //         date: '1954-06-01T04:18:00.112Z',
    //         age: 68,
    //       },
    //       registered: {
    //         date: '2011-10-29T17:08:52.363Z',
    //         age: 11,
    //       },
    //       phone: '(099) Z27-9093',
    //       cell: '(097) Y24-1504',
    //       id: {
    //         name: '',
    //         value: null,
    //       },
    //       picture: {
    //         large: 'https://randomuser.me/api/portraits/men/45.jpg',
    //         medium: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    //         thumbnail: 'https://randomuser.me/api/portraits/thumb/men/45.jpg',
    //       },
    //       nat: 'UA',
    //     },
    //   ],
    //   info: {
    //     seed: 'cc1d70a133186ce5',
    //     results: 20,
    //     page: 1,
    //     version: '1.4',
    //   },
    // };
    // return of(data);
  }
}
