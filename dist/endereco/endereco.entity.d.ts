import { Cliente } from "src/cliente/cliente.entity";
export declare class Endereco {
    constructor(cliente: Cliente, bairro?: string, cidade?: string, cep?: string);
    id: number;
    bairro: string;
    cidade: string;
    cep: string;
    cliente: Cliente;
}
