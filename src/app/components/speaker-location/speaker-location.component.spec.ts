import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerLocationComponent } from './speaker-location.component';

describe('SpeakerLocationComponent', () => {
  let component: SpeakerLocationComponent;
  let fixture: ComponentFixture<SpeakerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpeakerLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
