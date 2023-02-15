import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectSpeakersAll } from 'src/app/store/speakers/speaker.reducer';
import { SpeakerListComponent } from 'src/app/components/speaker-list/speaker-list.component';
import {
  isLoading,
  selectFilter,
  selectItemsPerPage,
} from 'src/app/store/ui/ui.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app/app.reducer';
import { FilterFormComponent } from 'src/app/components/filter-form/filter-form.component';
import { Filter } from 'src/app/models/filter';
import { Subject } from 'rxjs';
import { withLatestFrom, takeUntil, map, delay } from 'rxjs/operators';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { slice } from 'lodash';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule, SpeakerListComponent, FilterFormComponent],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit, OnDestroy {
  private speakers$ = this.store.select(selectSpeakersAll);
  filterSpeakers$: Observable<Speaker[]> | undefined;
  loading$: Observable<boolean> = this.store.select(isLoading);
  private filter$: Observable<Filter | undefined> =
    this.store.select(selectFilter);
  private itemsPerPage$: Observable<number> =
    this.store.select(selectItemsPerPage);
  private destroy$: Subject<boolean>;

  constructor(private readonly store: Store<AppState>) {
    this.destroy$ = new Subject();
  }

  ngOnInit(): void {
    this.filterSpeakers$ = this.store.pipe(
      withLatestFrom(this.speakers$, this.filter$, this.itemsPerPage$),
      delay(500),
      map(([_, speakers, filterValues, itemsPerPage]) => {
        let filterMatch = (speakers || []).filter(
          (speaker) =>
            this.filterGender(speaker, filterValues?.gender) &&
            this.filterFirstName(speaker, filterValues?.firstName) &&
            this.filterCountry(speaker, filterValues?.country) &&
            this.filterCity(speaker, filterValues?.city)
        );
        return slice(filterMatch, filterMatch.length - itemsPerPage);
      }),
      takeUntil(this.destroy$)
    );
  }

  filterGender(speaker: Speaker, gender: string | null | undefined): boolean {
    return !gender || gender === speaker.gender;
  }

  filterFirstName(
    speaker: Speaker,
    firstName: string | null | undefined
  ): boolean {
    return (
      !firstName ||
      (speaker?.name?.first || '')
        .toLowerCase()
        .includes(firstName.toLowerCase())
    );
  }

  filterCountry(speaker: Speaker, country: string | null | undefined): boolean {
    return !country || country === speaker?.location?.country;
  }

  filterCity(speaker: Speaker, city: string | null | undefined): boolean {
    return !city || city === speaker?.location?.city;
  }

  ngOnDestroy() {
    if (this.destroy$) {
      this.destroy$.next(true);
    }
  }
}
