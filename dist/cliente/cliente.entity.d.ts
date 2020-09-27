import { Endereco } from "src/endereco/endereco.entity";
import { Pedido } from "src/pedido/pedido.entity";
export declare class Cliente {
    constructor(nome?: string, cnpj?: string, ie?: string, email?: string, senha?: string);
    id: number;
    nome: string;
    cnpj: string;
    ie: string;
    email: string;
    senha: string;
    enderecos: Array<Endereco>;
    pedidos: Array<Pedido>;
}
