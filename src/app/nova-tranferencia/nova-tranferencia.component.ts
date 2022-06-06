import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Transferencia} from "../../model/Transferencia";

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() private aoTranferir = new EventEmitter<Transferencia>();

  private _transferencia: Transferencia;

  constructor() {
    this.transferencia = new Transferencia(0.00, 0);
  }

  get transferencia(): Transferencia {
    return this._transferencia;
  }

  set transferencia(value: Transferencia) {
    this._transferencia = value;
  }

  ngOnInit(): void {
  }

  transferir() {
    this.aoTranferir.emit(this.transferencia);
    this.clearFields();
  }

  clearFields() {
    this.transferencia.valor = 0.00;
    this.transferencia.destino = 0;
  }

}
