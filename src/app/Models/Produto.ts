export class Produto{
    constructor(
        public nome: String,
        public descricao: String,
        public imagem: String,
        public categoria: number,
        public precoCheio: Number,
        public precoDesconto: Number
    ){}
}