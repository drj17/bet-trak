export declare class UserEntity {
    id: string;
    created: Date;
    email: string;
    password: string;
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
