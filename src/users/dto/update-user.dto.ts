import { PartialType } from '@nestjs/mapped-types'; // allows to extend a DTO and give it the property to be optional required fields
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
