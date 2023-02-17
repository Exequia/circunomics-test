import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSummaryComponent } from './speaker-summary.component';

describe('SpeakerSummaryComponent', () => {
  let component: SpeakerSummaryComponent;
  let fixture: ComponentFixture<SpeakerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpeakerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
