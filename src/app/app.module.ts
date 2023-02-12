import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  speakerReducer,
  metaReducers,
  reducers,
} from './store/speakers/speaker.reducer';
import { SpeakerEffects } from './store/speakers/speaker.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SpeakerEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
