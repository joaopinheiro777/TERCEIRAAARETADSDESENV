"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../cliente/cliente.entity");
let Endereco = class Endereco {
    constructor(cliente, bairro, cidade, cep) {
        this.cliente = cliente;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Endereco.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'bairro', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column({ name: 'cidade', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column({ name: 'cep', type: 'varchar', length: 32 }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cliente_entity_1.Cliente, cliente => cliente.enderecos),
    typeorm_1.JoinColumn({ name: "cliente_id" }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Endereco.prototype, "cliente", void 0);
Endereco = __decorate([
    typeorm_1.Entity({ name: "enderecos" }),
    __metadata("design:paramtypes", [cliente_entity_1.Cliente, String, String, String])
], Endereco);
exports.Endereco = Endereco;
sourceMappingURL=endereco.entity.js.map