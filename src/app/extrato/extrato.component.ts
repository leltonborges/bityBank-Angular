import {Component, Input, OnInit} from '@angular/core';
import {Transferencia} from "../../model/Transferencia";
import {TransferenciaService} from "../../services/transferencia.service";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input()
  transferencias: Array<Transferencia>

  constructor(
    private transferenciaService: TransferenciaService
  ) {
  }

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.listTransferencia
  }

}
