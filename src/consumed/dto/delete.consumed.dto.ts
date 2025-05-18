import {
	IsString,
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteConsumedDto {
	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_user: number;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id_food: number;

	@IsDateString()
	@IsNotEmpty()
	@ApiProperty({
		description: 'Fecha en que se consumió el alimento',
		example: '2025-05-15',
	})
	date_consumed: string;
}
