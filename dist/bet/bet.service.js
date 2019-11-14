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
const typeorm_1 = require("typeorm");
const bet_entity_1 = require("./bet.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BetService = class BetService {
    constructor(betRepository) {
        this.betRepository = betRepository;
    }
    async findAll() {
        return await this.betRepository.find();
    }
    async create(data) {
        const bet = await this.betRepository.create(data);
        await this.betRepository.save(bet);
        return bet;
    }
    async findOne(id) {
        return await this.betRepository.findOne(id);
    }
    async findByUser(id) {
        return await this.betRepository.find({ where: { user: { id } } });
    }
    async update(id, data) {
        await this.betRepository.update(id, data);
        return this.betRepository.findOne(id);
    }
    async destroy(id) {
        await this.betRepository.delete(id);
        return { deleted: true };
    }
};
BetService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(bet_entity_1.BetEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BetService);
exports.BetService = BetService;
//# sourceMappingURL=bet.service.js.map