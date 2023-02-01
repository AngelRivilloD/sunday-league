import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  public lineUp: Player[] = [{
    "firstName": "Gabriel",
    "lastName": "Di Salvo",
    "nickName": "",
    "photo": "../../../assets/Gabo.jpeg",
    "number": 8,
    "position": "MED"
  },
  {
    "firstName": "Luis Miguel",
    "lastName": "García",
    "nickName": "",
    "photo": "../../../assets/Luismi.jpeg",
    "number": 14,
    "position": "MED"
  },
  {
    "firstName": "Antonio",
    "lastName": "Di Benedetto",
    "nickName": "",
    "photo": "../../../assets/Antony.jpeg",
    "number": 3,
    "position": "MED"
  },
  {
    "firstName": "Geanluca",
    "lastName": "Medaglia",
    "nickName": "",
    "photo": "../../../assets/Luca.jpeg",
    "number": 23,
    "position": "MED"
  },
  {
    "firstName": "Giancarlo",
    "lastName": "Santoro",
    "nickName": "",
    "photo": "../../../assets/Santoro.jpeg",
    "number": 20,
    "position": "MED"
  },
  {
    "firstName": "Richard",
    "lastName": "Aleixo",
    "nickName": "",
    "photo": "../../../assets/Richard.jpeg",
    "number": 6,
    "position": "MED"
  },
  {
    "firstName": "Antonio",
    "lastName": "Di Benedetto",
    "nickName": "",
    "photo": "../../../assets/Antony.jpeg",
    "number": 3,
    "position": "MED"
  },
  {
    "firstName": "Gian",
    "lastName": "Di Salvo",
    "nickName": "",
    "photo": "../../../assets/Chipi.jpeg",
    "number": 7,
    "position": "MED"
  },
  {
    "firstName": "Antonio",
    "lastName": "Di Benedetto",
    "nickName": "",
    "captain": true,
    "photo": "../../../assets/Antony.jpeg",
    "number": 3,
    "position": "MED"
  },
  {
    "firstName": "Samuel",
    "lastName": "Añez",
    "nickName": "",
    "photo": "../../../assets/Samuel.jpeg",
    "number": 18,
    "position": "DEL"
  },
  {
    "firstName": "Antonio",
    "lastName": "Di Benedetto",
    "nickName": "",
    "photo": "../../../assets/Antony.jpeg",
    "number": 3,
    "position": "MED"
  }];

  public bench: Player[] = [{
    "firstName": "Gabriel",
    "lastName": "Di Salvo",
    "nickName": "",
    "photo": "../../../assets/Gabo.jpeg",
    "number": 8,
    "position": "MED"
  },
  {
    "firstName": "Luis Miguel",
    "lastName": "García",
    "nickName": "",
    "photo": "../../../assets/Luismi.jpeg",
    "number": 14,
    "position": "MED"
  },
  {
    "firstName": "Angel",
    "lastName": "Rodriguez",
    "nickName": "",
    "photo": "../../../assets/Angel.jpeg",
    "number": 22,
    "position": "MED"
  },
  {
    "firstName": "Geanluca",
    "lastName": "Medaglia",
    "nickName": "",
    "photo": "../../../assets/Luca.jpeg",
    "number": 23,
    "position": "MED"
  },
  {
    "firstName": "Giancarlo",
    "lastName": "Santoro",
    "nickName": "",
    "photo": "../../../assets/Santoro.jpeg",
    "number": 20,
    "position": "MED"
  },
  {
    "firstName": "Richard",
    "lastName": "Aleixo",
    "nickName": "",
    "photo": "../../../assets/Richard.jpeg",
    "number": 6,
    "position": "MED"
  },
  {
    "firstName": "Antonio",
    "lastName": "Di Benedetto",
    "nickName": "",
    "photo": "../../../assets/Antony.jpeg",
    "number": 3,
    "position": "MED"
  },
  {
    "firstName": "Gian",
    "lastName": "Di Salvo",
    "nickName": "",
    "photo": "../../../assets/Chipi.jpeg",
    "number": 7,
    "position": "MED"
  },
  {
    "firstName": "Ricardo",
    "lastName": "Cogliano",
    "nickName": "",
    "photo": "../../../assets/KKto.jpeg",
    "number": 17,
    "position": "DEL"
  },
  {
    "firstName": "Samuel",
    "lastName": "Añez",
    "nickName": "",
    "photo": "../../../assets/Samuel.jpeg",
    "number": 18,
    "position": "DEL"
  },
  {
    "firstName": "Alejandro",
    "lastName": "Petruzzella",
    "nickName": "",
    "photo": "../../../assets/Petru.jpeg",
    "number": 91,
    "position": "DEL"
  },
  {
    "firstName": "Grauly",
    "lastName": "Luis",
    "nickName": "",
    "photo": "../../../assets/Grauly.jpeg",
    "number": 11,
    "position": "DEL"
  },
  {
    "firstName": "Elio",
    "lastName": "Rodriguez",
    "nickName": "",
    "photo": "../../../assets/Elio.jpeg",
    "number": 9,
    "position": "DEL"
  }];


  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    this.lineUp = (this._storageService.lineup.length > 0) ? this._storageService.lineup : this.lineUp;
    this.bench = (this._storageService.bench.length > 0) ? this._storageService.bench : this.bench;
  }

  addGoal(player: Player) {
    player.goals = (player.goals) ? player.goals + 1 : 1;
  }

  removeGoal(player: Player) {
    player.goals = (player.goals) ? player.goals - 1 : 1;
  }
}
