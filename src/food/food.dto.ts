import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FoodDto {
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
  brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  serving: string;

  @IsInt()
  @ApiProperty()
  calories: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  href: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  external_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  searchTerm: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sodium: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  total_fat: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  potassium: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  saturated: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  total_carbs: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  polyunsaturated: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  dietary_fiber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  monounsaturated: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sugars: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  trans: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  protein: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cholesterol: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  vitamin_a: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  calcium: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  vitamin_c: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  iron: string;
}
