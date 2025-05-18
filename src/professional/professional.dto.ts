import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProfessionalDto {
	@IsInt()
	@ApiProperty()
	id: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	name: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	specialty: string;

	@IsInt()
	@ApiProperty()
	total_score: number;

	@IsInt()
	@ApiProperty()
	total_reviews: number;
}
