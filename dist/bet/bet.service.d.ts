import { Repository } from 'typeorm';
import { BetEntity } from './bet.entity';
import { BetDTO } from './bet.dto';
export declare class BetService {
    private betRepository;
    constructor(betRepository: Repository<BetEntity>);
    findAll(): Promise<BetEntity[]>;
    create(data: BetDTO): Promise<BetEntity>;
    findOne(id: string): Promise<BetEntity>;
    update(id: string, data: Partial<BetDTO>): Promise<BetEntity>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
