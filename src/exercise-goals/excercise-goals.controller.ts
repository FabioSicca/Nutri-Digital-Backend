import { Controller, Patch, UseGuards, Request, Body, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ExerciseGoalsService } from "./exercise-goals.service";
import { ExerciseGoalsDto } from "./exercise-goals.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { GetUserId } from "../util/utils";

@ApiTags('Exercise Goals')
@Controller('exercise-goals')
export class ExerciseGoalsController {
  constructor(private readonly exerciseGoalsService: ExerciseGoalsService) {}

  @Patch('update')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update Exercise Goals' })
  @ApiResponse({
    status: 200,
    description: 'Updates the exercise goals for the user.',
  })
  public async updateExerciseGoals(
    @Body() exerciseGoalsDto: ExerciseGoalsDto,
    @Request() req: Request,
  ) {
    const user_id = GetUserId(req.headers);
    return await this.exerciseGoalsService.updateExerciseGoals(user_id, exerciseGoalsDto);
  }

  @Get('get')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get Exercise Goals' })
  @ApiResponse({
    status: 200,
    description: 'Retrieves the exercise goals for the user.',
  })
  public async getExerciseGoals(@Request() req: Request) {
    const user_id = GetUserId(req.headers);
    return await this.exerciseGoalsService.getExerciseGoals(user_id);
  }
}