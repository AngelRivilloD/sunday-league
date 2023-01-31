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
    }
  ];

  constructor(private _storageService: StorageService) { }

  ngOnInit(): void {
    // this._lineUp = this._storageService.lineup;
    console.log(this.lineUp);
  }
}
