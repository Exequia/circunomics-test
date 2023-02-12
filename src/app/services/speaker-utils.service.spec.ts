import { TestBed } from '@angular/core/testing';

import { SpeakerUtilsService } from './speaker-utils.service';

describe('SpeakerUtilsService', () => {
  let service: SpeakerUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
