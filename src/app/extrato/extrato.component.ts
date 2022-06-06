import {Component, Input, OnInit} from '@angular/core';
import {Transferencia} from "../../models/Transferencia.model";
import {TransferenciaService} from "../../services/transferencia.service";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input()
  transferencias: Transferencia[]

  constructor(
    private transferenciaService: TransferenciaService
  ) {
  }

  ngOnInit(): void {
    this.transferenciaService.findAll()
      .subscribe((dadas: Transferencia[]) =>{
        this.transferencias = dadas
      })
  }

}
