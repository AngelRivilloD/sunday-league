import { Component, OnInit } from '@angular/core';
import { playersData } from "../../shared/players";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Player } from "../../shared/player";
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  public allPlayers: Player[] = [];
  public players: Player[] = [];
  public goalkeepersAndDefenders: Player[] = [];
  public midfielders: Player[] = [];
  public attackers: Player[] = [];
  public lineUp: Player[] = [];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor(private _storageService: StorageService, private _router: Router) { }

  ngOnInit(): void {
    this.allPlayers = JSON.parse(JSON.stringify(playersData));
    this.players = playersData;
    this._fillPositions();
  }

  refresh() {
    this.players = this.allPlayers;
    this.lineUp = [];
    this._fillPositions();
  }

  playerSelected(player: Player) {
    if (this.lineUp.length > 10) {
      return;
    }
    console.log(player);
    if (!this.lineUp.includes(player)) {
      this.lineUp.push(player);
    }

    this.players = this.players.filter(item => { return item !== player });
    this._fillPositions();
  }

  removePlayer(player: Player) {
    this.lineUp = this.lineUp.filter(item => { return item !== player });
    this.players.push(player);
    this._fillPositions();
  }

  removeFromBench(player: Player) {
    console.log(player);

    this.players = this.players.filter(item => { return item !== player });
    this._fillPositions();
  }

  _fillPositions() {
    this.goalkeepersAndDefenders = this.players.filter(player => player.position === "POR" || player.position === "DEF");
    this.midfielders = this.players.filter(player => player.position === "MED");
    this.attackers = this.players.filter(player => player.position === "DEL");
  }

  goToHighlights() {
    this._storageService.lineup = this.lineUp;
    this._storageService.bench = this.players;
    this._storageService.lineUpMode = false;
  }

  goToLineup() {
    this._storageService.lineup = this.lineUp;
    this._storageService.bench = this.players;
    this._storageService.lineUpMode = true;
  }

  toConvocatoria() {
    this._storageService.players = this.players;
    console.log(this.players);

    this._router.navigateByUrl('/convocatoria');
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      console.log('moveItemInArray');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('transferArrayItem');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
