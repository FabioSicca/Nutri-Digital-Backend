import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlanningDto {

    @IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_user: number;

    @IsString()
	@IsNotEmpty()
	@ApiProperty()
	name_food: string;

    @IsString()
	@IsNotEmpty()
	@ApiProperty()
	day: string;

    @IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_food: number;

    @IsString()
	@IsNotEmpty()
	@ApiProperty()
	portion: string;
}