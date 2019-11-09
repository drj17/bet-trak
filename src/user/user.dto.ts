import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
