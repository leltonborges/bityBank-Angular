import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NovaTranferenciaComponent} from "./nova-tranferencia/nova-tranferencia.component";
import {FormsModule} from "@angular/forms";
import {ExtratoComponent} from './extrato/extrato.component';
import {registerLocaleData} from "@angular/common";
import localePT from "@angular/common/locales/pt"
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localePT, "pt")

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
