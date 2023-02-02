import { Injectable } from '@angular/core';
import { Player } from 'src/shared/player';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _lineup: Player[] = [];
  private _bench: Player[] = [];
  private _players: Player[] = [];

  constructor() { }

  set lineup(players: Player[]) {
    this._lineup = players;
  }

  get lineup(): Player[] {
    return this._lineup || [];
  }

  set bench(players: Player[]) {
    this._bench = players;
  }

  get bench(): Player[] {
    return this._bench || [];
  }

  set players(players: Player[]) {
    this._players = players;
  }

  get players(): Player[] {
    return this._players || [];
  }
}
