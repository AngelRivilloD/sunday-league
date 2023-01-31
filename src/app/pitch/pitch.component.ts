import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Player } from 'src/shared/player';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {

  public lineUp: Player[] = [
    {
      "firstName": "Gustavo",
      "lastName": "Rojas",
      "nickName": "",
      "number": 1,
      "position": "POR"
    },
    {
      "firstName": "Victor",
      "lastName": "Garban",
      "nickName": "",
      "number": 13,
      "position": "DEF"
    },
    {
      "firstName": "Angel",
      "lastName": "Rivillo",
      "nickName": "",
      "number": 16,
      "position": "DEF"
    },
    {
      "firstName": "Manuel",
      "lastName": "Cabana",
      "nickName": "",
      "number": 4,
      "position": "DEF"
    },
    {
      "firstName": "Daniel",
      "lastName": "Hernández",
      "nickName": "",
      "number": 79,
      "position": "DEF"
    },
    {
      "firstName": "Luis Miguel",
      "lastName": "García",
      "nickName": "",
      "number": 14,
      "position": "MED"
    },
    {
      "firstName": "Gabriel",
      "lastName": "Di Salvo",
      "nickName": "",
      "number": 8,
      "position": "MED"
    },
    {
      "firstName": "Angel",
      "lastName": "Rodriguez",
      "nickName": "",
      "number": 22,
      "position": "MED"
    },
    {
      "firstName": "Geanluca",
      "lastName": "Medaglia",
      "nickName": "",
      "number": 23,
      "position": "MED"
    },
    {
      "firstName": "Samuel",
      "lastName": "Añez",
      "nickName": "",
      "number": 18,
      "position": "DEL"
    },
    {
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "",
      "number": 91,
      "position": "DEL"
    }
  ];

  public bench: Player[] = [
    {
      "firstName": "Manuel",
      "lastName": "Cabana",
      "nickName": "",
      "number": 4,
      "position": "DEF"
    },
    {
      "firstName": "Tonino",
      "lastName": "Cogliano",
      "nickName": "",
      "number": 5,
      "position": "DEF"
    },
    {
      "firstName": "Ronny",
      "lastName": "De Abreu",
      "nickName": "",
      "number": 19,
      "position": "DEF"
    },
    {
      "firstName": "Raul",
      "lastName": "Goncalves",
      "nickName": "",
      "number": 28,
      "position": "DEF"
    },
    {
      "firstName": "Gonzalo",
      "lastName": "Casal",
      "nickName": "",
      "number": 2,
      "position": "MED"
    },
    {
      "firstName": "Geanluca",
      "lastName": "Medaglia",
      "nickName": "",
      "number": 23,
      "position": "MED"
    },
    {
      "firstName": "Giancarlo",
      "lastName": "Santoro",
      "nickName": "",
      "number": 20,
      "position": "MED"
    },
    {
      "firstName": "Antonio",
      "lastName": "Di Benedetto",
      "nickName": "",
      "number": 3,
      "position": "MED"
    },
    {
      "firstName": "Gian",
      "lastName": "Di Salvo",
      "nickName": "",
      "number": 7,
      "position": "MED"
    },
    {
      "firstName": "Ricardo",
      "lastName": "Cogliano",
      "nickName": "",
      "number": 17,
      "position": "DEL"
    },
    {
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "",
      "number": 91,
      "position": "DEL"
    },
    {
      "firstName": "Elio",
      "lastName": "Rodriguez",
      "nickName": "",
      "number": 9,
      "position": "DEL"
    },
    {
      "firstName": "Andres",
      "lastName": "Sepulveda",
      "nickName": "",
      "number": 32,
      "position": "DEL"
    }
  ];

  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    this.lineUp = (this._storageService.lineup.length > 0) ? this._storageService.lineup : this.lineUp;
    this.bench = (this._storageService.bench.length > 0) ? this._storageService.bench : this.bench;
  }
}
