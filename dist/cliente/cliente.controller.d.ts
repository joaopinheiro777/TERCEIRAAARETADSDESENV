import { Cliente } from './cliente.entity';
import { ClienteService } from "./cliente.service";
import { EnderecoService } from '../endereco/endereco.service';
import { ClienteBodyModel } from './ClienteBodyModel';
export declare class ClienteController {
    private readonly enderecoService;
    private readonly service;
    constructor(enderecoService: EnderecoService, service: ClienteService);
    findAll(): Promise<Cliente[]>;
    findById(id: number): Promise<Cliente>;
    create(bodyModel: ClienteBodyModel): Promise<{
        message: string;
        cliente: Cliente;
    }>;
}
