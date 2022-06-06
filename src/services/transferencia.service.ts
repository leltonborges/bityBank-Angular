import {Injectable} from '@angular/core';
import {Transferencia} from "../models/Transferencia.model";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../config/api.config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private _listTransferencia: Array<Transferencia>;

  constructor(
    private httpClient: HttpClient
  ) {
    this._listTransferencia = new Array<Transferencia>();
  }

  get listTransferencia(): Array<Transferencia> {
    return this._listTransferencia;
  }

  findAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(`${API_CONFIG.baseUrl}/transferencias`)
  }

  addTransferencia(...transferencia: Array<Transferencia>) {
    this.listTransferencia.push(...transferencia);
  }
}
