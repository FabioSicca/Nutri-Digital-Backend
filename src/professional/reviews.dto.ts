import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReviewCreationDto {
	@IsNotEmpty()
	@ApiProperty()
	professional_id: number;

	@IsNotEmpty()
	@ApiProperty()
	score: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	comment: string;

	@IsOptional()
	@ApiProperty()
	review_date: Date;
}
