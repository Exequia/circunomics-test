import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilterFormComponent } from 'src/app/components/filter-form/filter-form.component';
import { SpeakerListComponent } from 'src/app/components/speaker-list/speaker-list.component';
import { initialStateMock } from 'src/mocks/state.mock';

import { SpeakersComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: SpeakersComponent;
  let fixture: ComponentFixture<SpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersComponent, SpeakerListComponent, FilterFormComponent],
      providers: [provideMockStore({ initialState: initialStateMock })],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
