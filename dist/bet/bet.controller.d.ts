import { BetService } from './bet.service';
import { BetDTO } from './bet.dto';
export declare class BetController {
    private betService;
    constructor(betService: BetService);
    findAll(): Promise<import("./bet.entity").BetEntity[]>;
    create(data: BetDTO): Promise<import("./bet.entity").BetEntity>;
    findOne(id: string): Promise<import("./bet.entity").BetEntity>;
    update(id: string, data: Partial<BetDTO>): Promise<import("./bet.entity").BetEntity>;
    destroy(id: string): Promise<import("./bet.entity").BetEntity>;
}
