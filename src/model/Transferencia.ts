export class Transferencia{
  valor: number;
  destino: number;
  data?: Date;

  constructor(valor: number, destino: number, data?: Date) {
    this.valor = valor;
    this.destino = destino;
    this.data = data;
  }
}
