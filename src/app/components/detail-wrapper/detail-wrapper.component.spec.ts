import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWrapperComponent } from './detail-wrapper.component';

describe('DetailWrapperComponent', () => {
  let component: DetailWrapperComponent;
  let fixture: ComponentFixture<DetailWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
