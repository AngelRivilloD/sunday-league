import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LineupComponent } from 'src/app/lineup/lineup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PitchComponent } from './pitch/pitch.component';
import { PitchPlayerComponent } from './pitch/pitch-player/pitch-player.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { LineupPlayerComponent } from './lineup/lineup-player/lineup-player.component';
import { FilterByPositionPipe } from 'src/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    PitchComponent,
    PitchPlayerComponent,
    HighlightsComponent,
    ConvocatoriaComponent,
    LineupPlayerComponent,
    FilterByPositionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
