import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConsumedDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	portion: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	unit: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	type_of_food: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_user: number;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_food: number;
}
