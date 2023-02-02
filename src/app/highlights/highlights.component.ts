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

  print() {
    console.log(this.allPlayers);
    this._storageService.lineup = this.allPlayers.splice(0, 11);
    this._storageService.bench = this.allPlayers;
  }

  select(player: Player) {
    player.mvp = true;
  }
}
