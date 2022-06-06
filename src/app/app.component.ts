import { Component } from '@angular/core';
import {Transferencia} from "../model/Transferencia";
import {TransferenciaService} from "../services/transferencia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  transferir($event: any){
    let transferencia = new Transferencia($event.valor, $event.destino, new Date());
    this.transferenciaService.addTransferencia(transferencia)
    // this.transferencias.push(transferencia)
  }
}
