import { IsString, IsInt, IsNotEmpty, IsArray, ArrayNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FoodDto {
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
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	calories: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	sodium: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	total_fat: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	potassium: number

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	saturated: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	total_carbs: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	polyunsaturated: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	dietary_fiber: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	monounsaturated: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	sugars: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	trans: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	protein: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	cholesterol: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	vitamin_a: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	calcium: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	vitamin_c: number;

	@IsInt()
	@IsNotEmpty()
	@Min(0)
	@ApiProperty()
	iron: number;

	@IsArray()
  @ArrayNotEmpty()
	@IsString({ each: true })
	@ApiProperty({ type: [String], description: 'Array of dietary restrictions' })
	restricciones: string[];

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	tipo: string;
}
