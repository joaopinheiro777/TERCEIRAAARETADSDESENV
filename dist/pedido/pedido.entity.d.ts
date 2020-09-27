import { Cliente } from "src/cliente/cliente.entity";
export declare class Pedido {
    id: number;
    codigo: string;
    transportadora: string;
    valorTotal: Number;
    valorDescontos: Number;
    valorTotalProdutos: Number;
    dataDoPedido: Date;
    dataEntregaPrevista: Date;
    cliente: Cliente;
}
