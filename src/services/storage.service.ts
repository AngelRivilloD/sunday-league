import { Injectable } from '@angular/core';
import { Player } from 'src/shared/player';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _lineup: Player[] = [];

  constructor() { }

  set lineup(players: Player[]) {
    this._lineup = players;
  }

  get lineup(): Player[] {
    return this._lineup || [];
  }
}
