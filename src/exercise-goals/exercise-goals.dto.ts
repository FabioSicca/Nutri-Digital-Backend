import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class ExerciseGoalsDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  calories_burned_goal: number;
}