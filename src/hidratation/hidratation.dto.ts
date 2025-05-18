import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HidratationCreateDto {
	@IsNotEmpty()
	@ApiProperty()
	mililiters: number;

	@IsOptional()
	@ApiProperty()
	date_consumed: Date;
}
