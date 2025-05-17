import { IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NutrientGoalsDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  saturated_fat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  polyunsaturated_fat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  monounsaturated_fat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  trans_fat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  cholesterol?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  sodium?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  potassium?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  fiber?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  sugar?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  vitamin_a?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  vitamin_c?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  calcium?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  iron?: number;
}
