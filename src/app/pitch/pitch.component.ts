import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {

  public smallMode = false;
  public highLightsMode: boolean;
  public lineUp: Player[] = [
    {
      "firstName": "Gustavo",
      "lastName": "Rojas",
      "nickName": "Gustavo",
      "photo": "../../../assets/Gustavo.jpg",
      "number": 1,
      "position": "DEF"
    },
    {
      "firstName": "Angel",
      "lastName": "Rivillo",
      "nickName": "Rivi",
      "photo": "../../../assets/Rivi.jpg",
      "number": 16,
      "position": "DEF",
      "goals": 1,
      "assists": 0
    },
    {
      "firstName": "Manuel",
      "lastName": "Cabana",
      "nickName": "",
      "photo": "../../../assets/Cabana.jpg",
      "number": 4,
      "position": "DEF",
      "mvp": true
    },
    {
      "firstName": "Tonino",
      "lastName": "Cogliano",
      "nickName": "Nino",
      "photo": "../../../assets/Nino.jpg",
      "number": 5,
      "position": "DEF",
      "redCard": true
    },
    {
      "firstName": "Victor",
      "lastName": "Garban",
      "nickName": "Victor",
      "photo": "../../../assets/Victor.jpg",
      "number": 13,
      "position": "DEF",
      "assists": 2
    },
    {
      "firstName": "Angel",
      "lastName": "Rodriguez",
      "nickName": "Angel",
      "photo": "../../../assets/Angel.jpg",
      "number": 22,
      "position": "MED",
      "assists": 1
    },
    {
      "firstName": "Geanluca",
      "lastName": "Medaglia",
      "nickName": "Luca",
      "photo": "../../../assets/Luca.jpg",
      "number": 23,
      "position": "MED",
      "goals": 2,
      "assists": 2
    },
    {
      "firstName": "Richard",
      "lastName": "Aleixo",
      "nickName": "",
      "photo": "../../../assets/Richard.jpg",
      "number": 6,
      "position": "MED"
    },
    {
      "firstName": "Antonio",
      "lastName": "Di Benedetto",
      "nickName": "Antony",
      "photo": "../../../assets/Antony.jpg",
      "number": 3,
      "position": "MED"
    },
    {
      "firstName": "Samuel",
      "lastName": "Añez",
      "nickName": "Samu",
      "photo": "../../../assets/Samuel.jpg",
      "number": 18,
      "position": "DEL",
      "assists": 2
    },
    {
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "Petru",
      "photo": "../../../assets/Petru.jpg",
      "number": 91,
      "position": "DEL",
      "goals": 1
    }
  ];
  public bench: Player[] = [

    {
      "firstName": "Victor",
      "lastName": "Garban",
      "nickName": "Victor",
      "photo": "../../../assets/Victor.jpg",
      "number": 13,
      "position": "DEF",
      "assists": 2,
    },
    {
      "firstName": "Angel",
      "lastName": "Rodriguez",
      "nickName": "Angel",
      "photo": "../../../assets/Angel.jpg",
      "number": 22,
      "position": "MED",
      "assists": 3
    },
    {
      "firstName": "Geanluca",
      "lastName": "Medaglia",
      "nickName": "Luca",
      "photo": "../../../assets/Luca.jpg",
      "number": 23,
      "position": "MED",
      "goals": 3,
      "assists": 3
    },
    {
      "firstName": "Richard",
      "lastName": "Aleixo",
      "nickName": "",
      "photo": "../../../assets/Richard.jpg",
      "number": 6,
      "position": "MED"
    },
    {
      "firstName": "Antonio",
      "lastName": "Di Benedetto",
      "nickName": "Antony",
      "photo": "../../../assets/Antony.jpg",
      "number": 3,
      "position": "MED",
      "redCard": true,
      "goals": 3,
      "assists": 3
    },
    {
      "firstName": "Samuel",
      "lastName": "Añez",
      "nickName": "Samu",
      "photo": "../../../assets/Samuel.jpg",
      "number": 18,
      "position": "DEL",
      "assists": 2
    },
    {
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "Petru",
      "photo": "../../../assets/Petru.jpg",
      "number": 91,
      "position": "DEL",
      "goals": 1
    },
    {
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "Petru",
      "photo": "../../../assets/Petru.jpg",
      "number": 91,
      "position": "DEL",
      "goals": 1
    }
  ];

  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    // this.highLightsMode = this._storageService.highlightsMode;
    this.highLightsMode = true;
    this.lineUp = (this._storageService.lineup.length > 0) ? this._storageService.lineup : this.lineUp;
    this.bench = (this._storageService.bench.length > 0) ? this._storageService.bench : this.bench;
  }

  selectCaptain(player: Player) {
    this.lineUp.forEach(player => player.captain = false);
    player.captain = true;
  }
}
