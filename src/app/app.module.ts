import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store/speakers/speaker.reducer';
import { SpeakerEffects } from './store/speakers/speaker.effects';
import { SpeakersComponent } from './views/speakers/speakers.component';
import { SpeakerComponent } from './views/speaker/speaker.component';
import { SpeakerListComponent } from './components/speaker-list/speaker-list.component';
import { SpeakerDetailComponent } from './components/speaker-detail/speaker-detail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SpeakerEffects]),
    SpeakersComponent,
    SpeakerComponent,
    SpeakerListComponent,
    SpeakerDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
