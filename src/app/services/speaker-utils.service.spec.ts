import { TestBed } from '@angular/core/testing';
import { Speaker, SpeakerId } from '../store/speakers/speaker.model';

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

  it('getCleanId should return index with emtpy id params', () => {
    const id: SpeakerId = { name: '', value: null };
    const index: number = 0;
    expect(service.getCleanId(id, index)).toEqual('0_0');
  });

  it('getCleanId should return valid id with valid id params', () => {
    const id: SpeakerId = { name: 'test1', value: 'test2' };
    const index: number = 0;
    expect(service.getCleanId(id, index)).toEqual('test1_test2');
  });

  it('cleanString should return index with empty string', () => {
    const index: number = 1;
    expect(service.cleanString('', index)).toEqual('1');
  });

  it('cleanString should return index with undefined string', () => {
    const index: number = 2;
    expect(service.cleanString(undefined, index)).toEqual('2');
  });

  it('cleanString should return index with null string', () => {
    const index: number = 3;
    expect(service.cleanString(undefined, index)).toEqual('3');
  });

  it('cleanString should return trim string with valid string', () => {
    expect(service.cleanString(' test ', 0)).toEqual('test');
  });

  it('cleanResponseResults should replace id with value', () => {
    const id: SpeakerId = { name: 'test1', value: 'test2' };
    const results: Speaker[] = [{ id }];
    expect(service.cleanResponseResults(results)).toEqual([
      {
        id: 'test1_test2',
        speakerId: { name: 'test1', value: 'test2' },
      },
    ]);
  });

  it('cleanResponseResults should replace id with index', () => {
    const id: SpeakerId = { name: '', value: null };
    const results: Speaker[] = [{ id }];
    expect(service.cleanResponseResults(results)).toEqual([
      {
        id: '0_0',
        speakerId: { name: '', value: null },
      },
    ]);
  });
});
