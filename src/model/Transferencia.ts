export class Transferencia{
  valor: number;
  destino: number;
  date?: Date;

  constructor(valor: number, destino: number, date?: Date) {
    this.valor = valor;
    this.destino = destino;
    this.date = date;
  }
}
