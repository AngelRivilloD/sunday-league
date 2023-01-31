import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/shared/player';

@Component({
  selector: 'pitch-player',
  templateUrl: './pitch-player.component.html',
  styleUrls: ['./pitch-player.component.scss']
})
export class PitchPlayerComponent implements OnInit {

  @Input() player: Player;

  constructor() {
  }

  ngOnInit() {

  }
}
