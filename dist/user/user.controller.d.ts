import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    login(data: UserDTO): void;
    register(data: UserDTO): void;
    fetchAll(): void;
}
