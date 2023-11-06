import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  public allPlayers: Player[] = [];
  public lineUp: Player[] = [];
  public bench: Player[] = [];


  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    if (localStorage.getItem('lineup') && localStorage.getItem('bench')) {
      this.bench = JSON.parse(localStorage.getItem('bench') || '{}');
      this.lineUp = JSON.parse(localStorage.getItem('lineup') || '{}');
      this.allPlayers = this.lineUp.concat(this.bench);
      return;
    }

    this.lineUp = (this._storageService.lineup.length > 0) ? this._storageService.lineup : this.lineUp;
    this.bench = (this._storageService.bench.length > 0) ? this._storageService.bench : this.bench;
    this.allPlayers = this.lineUp.concat(this.bench);
  }

  addGoal(player: Player) {
    player.goals = (player.goals) ? player.goals + 1 : 1;
  }

  removeGoal(player: Player) {
    player.goals = (player.goals) ? player.goals - 1 : 1;
  }

  addAssist(player: Player) {
    player.assists = (player.assists) ? player.assists + 1 : 1;
  }

  removeAssist(player: Player) {
    player.assists = (player.assists) ? player.assists - 1 : 1;
  }

  changeRedCard(player: Player) {
    player.redCard = !player.redCard;
  }

  save() {
    this._storageService.lineup = this.allPlayers.splice(0, 11);
    this._storageService.bench = this.allPlayers;
    this._storageService.highlightsMode = true;
  }

  select(player: Player) {
    player.mvp = true;
  }

  existMvp() {
    return this.allPlayers.some(player => player.mvp);
  }
}
