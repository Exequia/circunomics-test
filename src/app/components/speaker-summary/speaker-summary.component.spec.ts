import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateMock } from 'src/mocks/state.mock';

import { SpeakerSummaryComponent } from './speaker-summary.component';

describe('SpeakerSummaryComponent', () => {
  let component: SpeakerSummaryComponent;
  let fixture: ComponentFixture<SpeakerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerSummaryComponent, NgOptimizedImage],
      providers: [provideMockStore({ initialState: initialStateMock })],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getFullName should return all full name', () => {
    component.speaker = {
      name: { title: 'Mr', first: 'Alberto', last: 'Real Estepa' },
    };
    expect(component.getFullName()).toEqual('Mr. Real Estepa, Alberto');
  });

  it('getFullName should not include title', () => {
    component.speaker = {
      name: { first: 'Alberto', last: 'Real Estepa' },
    };
    expect(component.getFullName()).toEqual('Real Estepa, Alberto');
  });

  it('getFullName should not include first', () => {
    component.speaker = {
      name: { title: 'Mr', last: 'Real Estepa' },
    };
    expect(component.getFullName()).toEqual('Mr. Real Estepa');
  });

  it('getFullName should not include last', () => {
    component.speaker = {
      name: { title: 'Mr', first: 'Alberto' },
    };
    expect(component.getFullName()).toEqual('Mr. Alberto');
  });
});
