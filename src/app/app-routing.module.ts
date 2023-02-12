import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/speakers/speakers.component').then(
        (mod) => mod.SpeakersComponent
      ),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./views/speaker/speaker.component').then(
        (mod) => mod.SpeakerComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
