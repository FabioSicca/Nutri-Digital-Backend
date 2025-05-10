import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	user: string;

    @IsString()
	@IsNotEmpty()
	@ApiProperty()
	name: string;

    @IsString()
	@IsNotEmpty()
	@ApiProperty()
	lastname: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	password: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	role: string;
}

export class LoginDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	user: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	password: string;
}