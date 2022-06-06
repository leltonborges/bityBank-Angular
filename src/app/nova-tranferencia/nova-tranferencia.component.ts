import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {
  private _valor: number;
  private _destino: number;

  constructor() {
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
    console.log(`Solicitado nova transferencia!
        valor: ${this.valor}
        destino: ${this.destino}`);
  }

}
