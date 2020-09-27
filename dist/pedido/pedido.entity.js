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
let Pedido = class Pedido {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'codigo', type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], Pedido.prototype, "codigo", void 0);
__decorate([
    typeorm_1.Column({ name: 'transportadora', type: 'varchar', length: 128 }),
    __metadata("design:type", String)
], Pedido.prototype, "transportadora", void 0);
__decorate([
    typeorm_1.Column({ name: 'valor_total', type: 'decimal' }),
    __metadata("design:type", Number)
], Pedido.prototype, "valorTotal", void 0);
__decorate([
    typeorm_1.Column({ name: 'valor_descontos', type: 'decimal' }),
    __metadata("design:type", Number)
], Pedido.prototype, "valorDescontos", void 0);
__decorate([
    typeorm_1.Column({ name: 'valor_total_produtos', type: 'decimal' }),
    __metadata("design:type", Number)
], Pedido.prototype, "valorTotalProdutos", void 0);
__decorate([
    typeorm_1.Column({ name: 'data_do_pedido', type: 'date' }),
    __metadata("design:type", Date)
], Pedido.prototype, "dataDoPedido", void 0);
__decorate([
    typeorm_1.Column({ name: 'data_entrega', type: 'date' }),
    __metadata("design:type", Date)
], Pedido.prototype, "dataEntregaPrevista", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cliente_entity_1.Cliente, cliente => cliente.pedidos),
    typeorm_1.JoinColumn({ name: "cliente_id" }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Pedido.prototype, "cliente", void 0);
Pedido = __decorate([
    typeorm_1.Entity({ name: "pedidos" })
], Pedido);
exports.Pedido = Pedido;
sourceMappingURL=pedido.entity.js.map