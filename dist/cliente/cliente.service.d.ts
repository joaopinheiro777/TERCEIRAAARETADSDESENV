import { Cliente } from "./cliente.entity";
import { Repository } from "typeorm";
export declare class ClienteService {
    private repository;
    constructor(repository: Repository<Cliente>);
    create(cliente: Cliente): Promise<Cliente>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findById(id: number): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
}
