import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  private _valor: number;
  private _destino: number;

  get valor(): number{
    return this._valor;
  }

  set valor(valor: number){
    this._valor = valor;
  }

  get destino(): number{
    return this._destino;
  }

  set destino(destino: number){
    this._destino = destino;
  }

  transferir($event: any){
    console.log($event)
    this.valor = $event.valor
    this.destino = $event.destino
  }
}
