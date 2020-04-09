export class Produto{
    constructor(
        public nome: String,
        public descricao: String,
        public imagem: String,
        public categoria: String,
        public precoCheio: Number,
        public precoDesconto: Number
    ){}
}