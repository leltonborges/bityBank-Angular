import {Routes} from "@angular/router";
import {ExtratoComponent} from "./extrato/extrato.component";
import {NovaTranferenciaComponent} from "./nova-tranferencia/nova-tranferencia.component";

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTranferenciaComponent},
]
