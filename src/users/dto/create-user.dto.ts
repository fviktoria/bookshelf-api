import { IsString } from 'class-validator';

// dto is used to validate input data

export class CreateUserDto {
  @IsString() // checks received fields
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}
