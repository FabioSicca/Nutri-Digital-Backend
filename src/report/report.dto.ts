import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportDto {
    @IsNotEmpty()
	@ApiProperty()
	quantity_consumed: number;

	@IsOptional()
	@ApiProperty()
	date_consumed: Date;
}