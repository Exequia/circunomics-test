import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter, FilterForm } from 'src/app/models/filter';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app/app.reducer';
import { Subject } from 'rxjs';
import { takeUntil, filter, take } from 'rxjs/operators';
import { updateFilter } from 'src/app/store/ui/ui.actions';
import { selectSpeakersAll } from 'src/app/store/speakers/speaker.reducer';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { get } from 'lodash';
import { selectFilter } from 'src/app/store/ui/ui.selector';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit, OnDestroy {
  filterForm = new FormGroup<FilterForm>({
    gender: new FormControl(''),
    firstName: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });
  private speakers$ = this.store.select(selectSpeakersAll);
  private destroy$: Subject<boolean>;
  genderOptions: (string | undefined)[] = [];
  countryOptions: (string | undefined)[] = [];
  cityOptions: (string | undefined)[] = [];

  constructor(private readonly store: Store<AppState>) {
    this.destroy$ = new Subject();
    this.store
      .select(selectFilter)
      .pipe(take(1))
      .subscribe((formValues) => this.filterForm.patchValue(formValues || {}));
  }

  ngOnInit() {
    this.filterForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((values) => {
        if (values) {
          const cleanValues = this.cleanValues(values);
          this.store.dispatch(updateFilter({ filter: cleanValues }));
        }
      });

    this.speakers$
      .pipe(
        filter((speakers) => !!speakers),
        takeUntil(this.destroy$)
      )
      .subscribe((speakers) => {
        this.createGenderOptions(speakers);
        this.createCountryOptions(speakers);
        this.createCityOptions(speakers);
      });
  }
  cleanValues(formValues: Partial<Filter>): Filter {
    return Object.fromEntries(
      Object.entries(formValues).filter(([key, value]) => value !== 'null')
    );
  }

  createGenderOptions(speakers: Speaker[]) {
    this.genderOptions = this.createPropertyOptions(speakers, 'gender');
  }

  createCountryOptions(speakers: Speaker[]) {
    this.countryOptions = this.createPropertyOptions(
      speakers,
      'location.country'
    );
  }

  createCityOptions(speakers: Speaker[]) {
    this.cityOptions = this.createPropertyOptions(speakers, 'location.city');
  }

  createPropertyOptions(speakers: Speaker[], keyPath: string) {
    const allOptions = speakers.map((speaker: any) => get(speaker, keyPath));
    return allOptions.filter(
      (element, index) => allOptions.indexOf(element) === index
    );
  }

  ngOnDestroy() {
    if (this.destroy$) {
      this.destroy$.next(true);
    }
  }
}
