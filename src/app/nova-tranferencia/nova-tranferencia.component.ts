import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() private aoTranferir = new EventEmitter<any>();

  _valor: number;
  _destino: number;

  constructor() {
    this.valor = 0.01;
    this.destino = 0.0;
  }

  get valor(): number {
    return this._valor;
  }

  set valor(value: number) {
    this._valor = value;
  }

  get destino(): number {
    return this._destino;
  }

  set destino(destino: number) {
    this._destino = destino;
  }

  ngOnInit(): void {
  }

  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTranferir.emit(valorEmitir);
    this.clearFields();
  }

  clearFields() {
    this._valor = 0.01;
    this.destino = 0;
  }

}
