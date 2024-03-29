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

  public bench: Player[] = [];
  public lineUp: Player[] = [];

  constructor(
    private _storageService: StorageService,
    private _router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('lineup') && localStorage.getItem('bench')) {
      this.bench = JSON.parse(localStorage.getItem('bench') || '{}');
      this.lineUp = JSON.parse(localStorage.getItem('lineup') || '{}');
      return;
    }

    this.bench = JSON.parse(JSON.stringify(playersData));
  }

  refresh() {
    this.bench = JSON.parse(JSON.stringify(playersData));
    this.lineUp = [];
  }

  selectCaptain(player: Player) {
    if (player.captain) {
      player.captain = false;
      return;
    }
    this.lineUp.forEach(player => player.captain = false);
    player.captain = true;
  }

  playerSelected(player: Player) {
    if (this.lineUp.length > 10) { return }

    this.lineUp.push(player);
    this.bench = this.bench.filter(item => { return item !== player });
  }

  removeFromLineup(player: Player) {
    this.lineUp = this.lineUp.filter(item => { return item !== player });
    this.bench = this.bench.concat(player);
  }

  removeFromBench(player: Player) {
    this.bench = this.bench.filter(item => { return item !== player });
  }

  goToLineup() {
    this._storePositions();
    this._storageService.highlightsMode = false;
    this._router.navigateByUrl('/pitch');
  }

  goToHighlights() {
    this._storePositions();
    this._router.navigateByUrl('/highlights');
  }

  checkPosition(position: string) {
    const exist = this.bench.some(player => player.position === position);
    return exist;
  }

  captainExist(lineUp: Player[]) {
    console.log(lineUp, lineUp.some(player => player.captain));
    return lineUp.some(player => player.captain);
  }

  private _storePositions() {
    this._storageService.lineup = this.lineUp;
    this._storageService.bench = this.bench;
    localStorage.setItem('lineup', JSON.stringify(this.lineUp));
    localStorage.setItem('bench', JSON.stringify(this.bench));
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
