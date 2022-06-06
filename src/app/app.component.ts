import { Component } from '@angular/core';
import {Transferencia} from "../model/Transferencia";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  private _transferencias: Array<Transferencia>;

  constructor() {
    this._transferencias = new Array<Transferencia>();
  }

  get transferencias(): Array<Transferencia> {
    return this._transferencias;
  }

  set transferencias(value: Array<Transferencia>) {
    this._transferencias = value;
  }

  transferir($event: any){
    let transferencia = new Transferencia($event.valor, $event.destino, new Date());
    this.transferencias.push(transferencia)
  }
}
