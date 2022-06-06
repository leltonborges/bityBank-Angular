import {Component, Input, OnInit} from '@angular/core';
import {Transferencia} from "../../model/Transferencia";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input()
  transferencias: Array<Transferencia>

  constructor() {
  }

  ngOnInit(): void {
  }

}
