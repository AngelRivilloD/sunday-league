import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/shared/player';

@Component({
  selector: 'lineup-player',
  templateUrl: './lineup-player.component.html',
  styleUrls: ['./lineup-player.component.scss']
})
export class LineupPlayerComponent {

  @Input() data: Player;
  @Input() allowDelete: boolean = false;

  @Output() playerSelected = new EventEmitter<any>();
  @Output() removePlayer = new EventEmitter<any>();

  select(player: Player) {
    if (this.allowDelete) {
      this.remove(player);
      return;
    }

    this.playerSelected.emit(player);
  }

  remove(player: Player) {
    this.removePlayer.emit(player);
  }
}
