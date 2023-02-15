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
});
