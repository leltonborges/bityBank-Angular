import { Injectable } from '@angular/core';
import {Transferencia} from "../model/Transferencia";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private _listTransferencia: Array<Transferencia>;

  constructor() {
    this._listTransferencia = new Array<Transferencia>();
  }

  get listTransferencia(): Array<Transferencia> {
    return this._listTransferencia;
  }

  addTransferencia(...transferencia: Array<Transferencia>){
    this.listTransferencia.push(...transferencia);
  }
}
