"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cliente_controller_1 = require("./cliente/cliente.controller");
const cliente_service_1 = require("./cliente/cliente.service");
const cliente_entity_1 = require("./cliente/cliente.entity");
const typeorm_1 = require("@nestjs/typeorm");
const endereco_entity_1 = require("./endereco/endereco.entity");
const produto_entity_1 = require("./produto/produto.entity");
const pedido_entity_1 = require("./pedido/pedido.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'ecommerce-nest-jss',
                entities: [
                    cliente_entity_1.Cliente,
                    endereco_entity_1.Endereco,
                    produto_entity_1.Produto,
                    pedido_entity_1.Pedido
                ],
                synchronize: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                cliente_entity_1.Cliente,
                endereco_entity_1.Endereco,
                produto_entity_1.Produto,
                pedido_entity_1.Pedido
            ])
        ],
        controllers: [
            cliente_controller_1.ClienteController
        ],
        providers: [
            cliente_service_1.ClienteService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
sourceMappingURL=app.module.js.map