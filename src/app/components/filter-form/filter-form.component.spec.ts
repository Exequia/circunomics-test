import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { Filter } from 'src/app/models/filter';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { initialStateMock } from 'src/mocks/state.mock';

import { FilterFormComponent } from './filter-form.component';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterFormComponent, ReactiveFormsModule],
      providers: [provideMockStore({ initialState: initialStateMock })],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cleanValues should remove null value', () => {
    const formValues: Partial<Filter> = { gender: 'null' };
    expect(component.cleanValues(formValues)).toEqual({});
  });

  it('cleanValues should be the same with no null value', () => {
    const formValues: Partial<Filter> = { gender: 'female' };
    expect(component.cleanValues(formValues)).toEqual(formValues);
  });

  it('createGenderOptions should generate female option', () => {
    const speakers: Speaker[] = [{ gender: 'female' }];
    component.createGenderOptions(speakers);
    expect(component.genderOptions).toEqual(['female']);
  });

  it('createGenderOptions should generate male option', () => {
    const speakers: Speaker[] = [{ gender: 'male' }];
    component.createGenderOptions(speakers);
    expect(component.genderOptions).toEqual(['male']);
  });

  it('createGenderOptions should generate both option', () => {
    const speakers: Speaker[] = [{ gender: 'male' }, { gender: 'female' }];
    component.createGenderOptions(speakers);
    expect(component.genderOptions).toEqual(['male', 'female']);
  });

  it('createCityOptions should generate city options', () => {
    const speakers: Speaker[] = [{ location: { city: 'Barcelona' } }];
    component.createCityOptions(speakers);
    expect(component.cityOptions).toEqual(['Barcelona']);
  });

  it('createCountryOptions should generate country options', () => {
    const speakers: Speaker[] = [{ location: { country: 'Spain' } }];
    component.createCountryOptions(speakers);
    expect(component.countryOptions).toEqual(['Spain']);
  });

  it('createCountryOptions should generate country options', () => {
    const speakers: Speaker[] = [{ location: { country: 'Spain' } }];
    expect(
      component.createPropertyOptions(speakers, 'location.country')
    ).toEqual(['Spain']);
  });
});
