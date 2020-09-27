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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("./cliente.entity");
const cliente_service_1 = require("./cliente.service");
const endereco_service_1 = require("../endereco/endereco.service");
const ClienteBodyModel_1 = require("./ClienteBodyModel");
const endereco_entity_1 = require("../endereco/endereco.entity");
let ClienteController = class ClienteController {
    constructor(enderecoService, service) {
        this.enderecoService = enderecoService;
        this.service = service;
    }
    async findAll() {
        return await this.service.findAll();
    }
    async findById(id) {
        return this.service.findById(id);
    }
    async create(bodyModel) {
        const cliente = new cliente_entity_1.Cliente(bodyModel.nome, bodyModel.cpf, bodyModel.rg, bodyModel.email);
        const novoCliente = await this.service.create(cliente);
        const endereco = new endereco_entity_1.Endereco(novoCliente, bodyModel.bairro, bodyModel.cidade, bodyModel.cep);
        await this.enderecoService.create(endereco);
        return { message: "Cliente cadastrado com sucesso.", cliente: novoCliente };
    }
};
__decorate([
    common_1.Get("/todos"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "findById", null);
__decorate([
    common_1.Post("/criar"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClienteBodyModel_1.ClienteBodyModel]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
ClienteController = __decorate([
    common_1.Controller("/clientes"),
    __metadata("design:paramtypes", [endereco_service_1.EnderecoService,
        cliente_service_1.ClienteService])
], ClienteController);
exports.ClienteController = ClienteController;
ssourceMappingURL=cliente.controller.js.map