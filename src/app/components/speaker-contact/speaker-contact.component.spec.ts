import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerContactComponent } from './speaker-contact.component';

describe('SpeakerContactComponent', () => {
  let component: SpeakerContactComponent;
  let fixture: ComponentFixture<SpeakerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpeakerContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
