import {Component} from '@angular/core';
import {Transferencia} from "../models/Transferencia.model";
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
  ) {
  }

  transferir($event: any) {
    let transferencia = new Transferencia();
    transferencia.destino = $event.destino
    transferencia.valor = $event.valor
    transferencia.date = new Date();

    this.transferenciaService.addTransferencia(transferencia)
    // this.transferencias.push(transferencia)
  }
}
