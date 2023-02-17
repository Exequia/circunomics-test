import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakerDetailComponent } from 'src/app/components/speaker-detail/speaker-detail.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateMock } from 'src/mocks/state.mock';

import { SpeakerComponent } from './speaker.component';

describe('SpeakerComponent', () => {
  let component: SpeakerComponent;
  let fixture: ComponentFixture<SpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerComponent, SpeakerDetailComponent],
      providers: [provideMockStore({ initialState: initialStateMock })],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
