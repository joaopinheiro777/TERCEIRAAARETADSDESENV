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
let Produto = class Produto {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'nome', type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Produto.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ name: 'descricao', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Produto.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column({ name: 'preco', type: 'decimal' }),
    __metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
__decorate([
    typeorm_1.Column({ name: 'quantidade_estoque', type: 'decimal' }),
    __metadata("design:type", Number)
], Produto.prototype, "quantidadeEstoque", void 0);
__decorate([
    typeorm_1.Column({ name: 'unidade_medida', type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Produto.prototype, "unidadeMedida", void 0);
__decorate([
    typeorm_1.Column({ name: 'data_de_validade', type: 'date' }),
    __metadata("design:type", Date)
], Produto.prototype, "dataDeValidade", void 0);
Produto = __decorate([
    typeorm_1.Entity({ name: "produtos" })
], Produto);
exports.Produto = Produto;
sourceMappingURL=produto.entity.js.map