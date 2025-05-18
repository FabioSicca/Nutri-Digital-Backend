import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HidratationCreateDto {
	@IsNotEmpty()
	@ApiProperty()
	mililiters: number;

	@IsNotEmpty()
	@ApiProperty()
	date: Date;
}
