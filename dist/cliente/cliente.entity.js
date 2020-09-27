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
const endereco_entity_1 = require("../endereco/endereco.entity");
const pedido_entity_1 = require("../pedido/pedido.entity");
let Cliente = class Cliente {
    constructor(nome, cnpj, ie, email, senha) {
        this.nome = name;
        this.cnpj = cnpj;
        this.ie = ie;
        this.email = email;
        this.senha = senha;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'nome', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ name: 'cnpj', type: 'varchar', length: 32 }),
    __metadata("design:type", String)
], Cliente.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column({ name: 'ie', type: 'varchar', length: 32 }),
    __metadata("design:type", String)
], Cliente.prototype, "ie", void 0);
__decorate([
    typeorm_1.Column({ name: 'email', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'senha', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Cliente.prototype, "senha", void 0);
__decorate([
    typeorm_1.OneToMany(type => endereco_entity_1.Endereco, endereco => endereco.cliente, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Cliente.prototype, "enderecos", void 0);
__decorate([
    typeorm_1.OneToMany(type => pedido_entity_1.Pedido, pedido => pedido.cliente, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Cliente.prototype, "pedidos", void 0);
Cliente = __decorate([
    typeorm_1.Entity({ name: 'clientes' }),
    __metadata("design:paramtypes", [String, String, String, String, String])
], Cliente);
exports.Cliente = Cliente;
sourceMappingURL=cliente.entity.js.map