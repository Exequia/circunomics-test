import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GenderPipe } from 'src/app/pipes/gender.pipe';
import { initialStateMock } from 'src/mocks/state.mock';
import { DetailWrapperComponent } from '../detail-wrapper/detail-wrapper.component';

import { SpeakerMainComponent } from './speaker-main.component';

describe('SpeakerMainComponent', () => {
  let component: SpeakerMainComponent;
  let fixture: ComponentFixture<SpeakerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SpeakerMainComponent,
        DetailWrapperComponent,
        NgOptimizedImage,
        GenderPipe,
      ],
      providers: [provideMockStore({ initialState: initialStateMock })],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
