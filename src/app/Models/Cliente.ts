export class Cliente{
    constructor(
        public idCliente: number,
        public cpf: String,
        public nascimento: Date,
        public nome: String,
        public telefone: String,
        public email: String,
        public password: String,
        public pedido: number,
        public endereco: number
    ){}
}

