import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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
