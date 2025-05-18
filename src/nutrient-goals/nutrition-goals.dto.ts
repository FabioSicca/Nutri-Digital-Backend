import { IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NutritionGoalsDto {
	@IsOptional()
	@IsNumber()
	@Min(0)
	@ApiProperty()
	calories?: number;

	@IsOptional()
	@IsNumber()
	@Min(0)
	@ApiProperty()
	total_fat?: number;

	@IsOptional()
	@IsNumber()
	@Min(0)
	@ApiProperty()
	total_carbs?: number;

	@IsOptional()
	@IsNumber()
	@Min(0)
	@ApiProperty()
	protein?: number;
}
