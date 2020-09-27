import { Endereco } from "./endereco.entity";
import { Repository } from "typeorm";
export declare class EnderecoService {
    private repository;
    constructor(repository: Repository<Endereco>);
    create(endereco: Endereco): Promise<Endereco>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findById(id: number): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
}
