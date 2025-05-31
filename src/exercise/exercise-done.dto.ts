import { Min, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExerciseDoneDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_user: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_exercise: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  calories_burned: number;
}