import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {

  public smallMode = false;
  public highLightsMode: boolean;
  public lineUp: Player[] = [];
  public bench: Player[] = [];

  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    this.highLightsMode = this._storageService.highlightsMode;
    this.lineUp = (this._storageService.lineup.length > 0) ? this._storageService.lineup : this.lineUp;
    this.bench = (this._storageService.bench.length > 0) ? this._storageService.bench : this.bench;
  }

  selectCaptain(player: Player) {
    this.lineUp.forEach(player => player.captain = false);
    player.captain = true;
  }
}
