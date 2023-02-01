import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightsComponent } from './highlights/highlights.component';
import { LineupComponent } from './lineup/lineup.component';

const routes: Routes = [
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'highlights',
    component: HighlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
