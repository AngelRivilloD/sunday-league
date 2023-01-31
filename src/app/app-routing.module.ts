import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupComponent } from './lineup/lineup.component';
import { PitchComponent } from './pitch/pitch.component';

const routes: Routes = [
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'pitch',
    component: PitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
