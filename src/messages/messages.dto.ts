import { IsInt, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MessageCreationDto {
	@IsNotEmpty()
	@ApiProperty()
	recipient_user_id: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	text_content: string;
}
