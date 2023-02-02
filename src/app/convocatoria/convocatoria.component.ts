import { Component } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss']
})
export class ConvocatoriaComponent {

  public defenders: Player[] = [];
  public midfielders: Player[] = [];
  public attackers: Player[] = [];
  public goalkeepers: Player[] = [];

  public players: Player[] = [];

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    // this.players = this._storageService.players;
    this.defenders = this.players.filter(player => player.position === "DEF");
    this.midfielders = this.players.filter(player => player.position === "MED");
    this.attackers = this.players.filter(player => player.position === "DEL");
    this.goalkeepers = this.players.filter(player => player.position === "POR");
  }

}
