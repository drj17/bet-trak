import { UserEntity } from 'src/user/user.entity';
export declare class BetEntity {
    id: string;
    created: Date;
    wager: number;
    line: number;
    won: boolean;
    user: UserEntity;
}
