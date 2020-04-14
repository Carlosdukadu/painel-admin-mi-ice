import { Produto } from './Produto';

export class Pedido {
    constructor(
        public cliente: number,
        public vlFrete: number,
        public vlTotal: number,
        public formapgto: string,
        public dtPedido: Date,
        public endereco: number,
        public status: string,
        public itemPedido: Produto[],
        public idPedido?: number
    ) { }
}