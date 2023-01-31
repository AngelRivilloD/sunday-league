import { Component, OnInit } from '@angular/core';
import { playersData } from "../shared/players";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Player } from "./../shared/player";


@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  public players: Player[] = [];
  public defenses: Player[] = [];
  public midfielders: Player[] = [];
  public attackers: Player[] = [];
  public goalkeepers: Player[] = [];
  public lineUp: Player[] = [];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor() { }

  ngOnInit(): void {
    this.players = playersData;
    this._fillPositions();
    console.log(this.defenses);

    console.log(this.players);
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

  _fillPositions() {
    this.defenses = this.players.filter(player => player.position === "DEF");
    this.midfielders = this.players.filter(player => player.position === "MED");
    this.attackers = this.players.filter(player => player.position === "DEL");
    this.goalkeepers = this.players.filter(player => player.position === "POR");
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
