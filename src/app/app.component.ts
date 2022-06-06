import { Component } from '@angular/core';
import {Transferencia} from "../model/Transferencia";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  private _transferencia: Transferencia;

  constructor() {
    this._transferencia = new Transferencia();
  }

  get transferencia(): Transferencia {
    return this._transferencia;
  }

  set transferencia(value: Transferencia) {
    this._transferencia = value;
  }

  transferir($event: any){
    console.log($event)
    this.transferencia.valor = $event.valor
    this.transferencia.destino = $event.destino
  }
}
