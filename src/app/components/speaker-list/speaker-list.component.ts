import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Speaker } from 'src/app/store/speakers/speaker.model';
import { SpeakerSummaryComponent } from '../speaker-summary/speaker-summary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Store } from '@ngrx/store';
import { SpeakerState } from 'src/app/store/speakers/speaker.reducer';
import { getSpeakersData } from 'src/app/store/speakers/speaker.actions';

@Component({
  selector: 'app-speaker-list',
  standalone: true,
  imports: [CommonModule, SpeakerSummaryComponent, NgxPaginationModule],
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss'],
})
export class SpeakerListComponent implements OnInit {
  @Input() speakers: Speaker[] | null = null;
  p: number = 1;

  constructor(private readonly store: Store<SpeakerState>) {}

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.p = page;
    this.store.dispatch(getSpeakersData({ page }));
  }
}
