import {Component, OnInit} from '@angular/core';
import {Transferencia} from "../../models/Transferencia.model";
import {TransferenciaService} from "../../services/transferencia.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {
  private _transferencia: Transferencia;

  constructor(
    private transferenciaServive: TransferenciaService,
    private router: Router
  ) {
    this.transferencia = new Transferencia();
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
    this.transferencia.date = new Date()
    this.transferenciaServive.addTransferencia(this.transferencia)
      .subscribe(result => {
        console.log(`nova trans: ${result}`)
        this.router.navigateByUrl('extrato');
      })
  }


}
