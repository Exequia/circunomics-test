import { NgModule, isDevMode } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
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
