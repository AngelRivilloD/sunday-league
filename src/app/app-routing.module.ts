import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineupComponent } from './../lineup/lineup.component';

const routes: Routes = [
  {
    path: 'lineup',
    component: LineupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
