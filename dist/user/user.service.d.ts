import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    login(data: UserDTO): Promise<{
        id: string;
        email: string;
        created: Date;
        token: string;
    }>;
    register(data: UserDTO): Promise<{
        id: string;
        email: string;
        created: Date;
        token: string;
    }>;
    fetchAll(): Promise<{
        id: string;
        email: string;
        created: Date;
        token: string;
    }[]>;
}
