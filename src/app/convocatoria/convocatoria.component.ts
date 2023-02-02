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

  public players: Player[] = [
    {
      "firstName": "Gustavo",
      "lastName": "Rojas",
      "nickName": "",
      "photo": "../../../assets/Gustavo.jpeg",
      "number": 1,
      "position": "POR"
    },
    {
      "firstName": "Angel",
      "lastName": "Rivillo",
      "nickName": "",
      "photo": "../../../assets/Rivi.jpeg",
      "number": 16,
      "position": "DEF"
    },
    {
      "firstName": "Victor",
      "lastName": "Garban",
      "nickName": "",
      "photo": "../../../assets/Victor.jpeg",
      "number": 13,
      "position": "DEF"
    },
    {
      "firstName": "Nelson",
      "lastName": "Ferreira",
      "nickName": "",
      "photo": "../../../assets/Archie.jpeg",
      "number": 15,
      "position": "DEF"
    },
    {
      "firstName": "Ronny",
      "lastName": "De Abreu",
      "nickName": "",
      "photo": "../../../assets/Ronny.jpeg",
      "number": 19,
      "position": "DEF"
    },
    {
      "firstName": "Raul",
      "lastName": "Goncalves",
      "nickName": "",
      "photo": "../../../assets/Raul.jpeg",
      "number": 28,
      "position": "DEF"
    },
    {
      "firstName": "Daniel",
      "lastName": "Hernández",
      "nickName": "",
      "photo": "../../../assets/Daniel.jpeg",
      "number": 79,
      "position": "DEF"
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
      "firstName": "Alejandro",
      "lastName": "Petruzzella",
      "nickName": "",
      "photo": "../../../assets/Petru.jpeg",
      "number": 91,
      "position": "DEL"
    },
    {
      "firstName": "Luis",
      "lastName": "Grauly",
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
    }
  ];

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    // this.players = this._storageService.players;
    this.defenders = this.players.filter(player => player.position === "DEF");
    this.midfielders = this.players.filter(player => player.position === "MED");
    this.attackers = this.players.filter(player => player.position === "DEL");
    this.goalkeepers = this.players.filter(player => player.position === "POR");
  }

}
