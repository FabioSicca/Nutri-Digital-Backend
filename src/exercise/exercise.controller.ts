import {
	Controller,
	UseGuards,
	Get,
	Query,
	Post,
	Body,
	Delete,
  Headers,
  Header,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetDay, GetUserId } from '../util/utils';
import { ExerciseService } from './exercise.service';
import { ExerciseDoneDto } from './exercise-done.dto';

@ApiTags('Exercise')
@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  @ApiOperation({ summary: 'Add exercise to exercises done for a user' })
  @UseGuards(JwtAuthGuard)
  public async addExercise(@Body() exerciseData: ExerciseDoneDto) {
    return await this.exerciseService.addExerciseToDone(exerciseData);
  }

  @Get()
  @ApiOperation({ summary: 'Get exercises for a client' })
  @UseGuards(JwtAuthGuard)
  public async getExercises(
    @Query('date') date: string,     
    @Headers() headers: Record<string, string>,
    @Query('userId') userId?: number,
  ) {
    if (!userId) {
			userId = GetUserId(headers);
		}
    let day = GetDay(date);
    return await this.exerciseService.getExercisesFromDay(userId, day);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all exercises types' })
  @UseGuards(JwtAuthGuard)
  public async getAllExercises(
    @Headers() headers: Record<string, string>,
  ) {
    const userId = GetUserId(headers);
    return await this.exerciseService.getAllExercises();
  }

  @Delete()
  @ApiOperation({ summary: 'Delete exercise from exercises done for a user' })
  @UseGuards(JwtAuthGuard)
  public async deleteExerciseFromDone(
    @Query('id') id: number,
    @Headers() headers: Record<string, string>
  ) {
    const userId = GetUserId(headers);
    return await this.exerciseService.deleteExerciseFromDone(id);
  }
}