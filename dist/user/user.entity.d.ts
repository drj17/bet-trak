import { BetEntity } from 'src/bet/bet.entity';
export declare class UserEntity {
    id: string;
    created: Date;
    email: string;
    password: string;
    bets: BetEntity[];
    hashPassword(): Promise<void>;
    toResponseObject(showToken?: boolean): {
        id: string;
        email: string;
        created: Date;
        token: string;
    };
    comparePassword(attempt: string): Promise<boolean>;
    private get token();
}
