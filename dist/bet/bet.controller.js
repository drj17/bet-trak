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
const bet_service_1 = require("./bet.service");
const bet_dto_1 = require("./bet.dto");
const validation_pipe_1 = require("../shared/validation.pipe");
let BetController = class BetController {
    constructor(betService) {
        this.betService = betService;
    }
    findAll() {
        return this.betService.findAll();
    }
    create(data) {
        return this.betService.create(data);
    }
    findOne(id) {
        const bet = this.betService.findOne(id);
        if (!bet) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return bet;
    }
    update(id, data) {
        const bet = this.betService.findOne(id);
        if (!bet) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.betService.update(id, data);
    }
    destroy(id) {
        const bet = this.betService.findOne(id);
        if (!bet) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        this.betService.destroy(id);
        return bet;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BetController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bet_dto_1.BetDTO]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "destroy", null);
BetController = __decorate([
    common_1.Controller('api/bet'),
    __metadata("design:paramtypes", [bet_service_1.BetService])
], BetController);
exports.BetController = BetController;
//# sourceMappingURL=bet.controller.js.map