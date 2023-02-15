import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpeakerService } from './speaker.service';
import { SpeakerResponse } from 'src/app/models/speaker';

describe('SpeakerService', () => {
  let service: SpeakerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpeakerService);

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testData: SpeakerResponse = {
      results: [
        {
          gender: 'female',
          name: { title: 'Mrs', first: 'Leila', last: 'Vik' },
          location: {
            street: { number: 3444, name: 'Noreveien' },
            city: 'Melbu',
            state: 'Oppland',
            country: 'Norway',
            postcode: '0026',
            coordinates: { latitude: '45.8127', longitude: '46.4756' },
            timezone: { offset: '+9:30', description: 'Adelaide, Darwin' },
          },
          email: 'leila.vik@example.com',
          login: {
            uuid: '8e7e5988-ed47-4681-900e-9a3ca8bd677a',
            username: 'whitemeercat693',
            password: '111222',
            salt: 'YrCyFhfd',
            md5: '0c7302ca7dbf57093283e55f521c296c',
            sha1: '5e14563f4e7b281c93b6035303b74d3f8abc0d89',
            sha256:
              '62ef709eb31265ab3bdc46f7b9ced589c5109cd2e25f74c95144444954eabbb5',
          },
          dob: { date: '1955-06-24T06:32:01.606Z', age: 67 },
          registered: { date: '2017-07-20T09:46:14.736Z', age: 5 },
          phone: '67834462',
          cell: '45575276',
          id: { name: 'FN', value: '24065507648' },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/65.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/65.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/65.jpg',
          },
          nat: 'NO',
        },
      ],
      info: { seed: 'be8dac59514cf762', results: 1, page: 1, version: '1.4' },
    };

    // Make an HTTP GET request
    service.getSpeakers(1, 1).subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(
      'https://randomuser.me/api/?results=1&page=1'
    );

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
