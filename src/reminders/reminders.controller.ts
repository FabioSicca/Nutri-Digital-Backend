import { Controller, UseGuards, Get, Query, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConsumedService } from './../consumed/consumed.service';
import { HidratationService } from './../hidratation/hidratation.service';
import { ExerciseService } from './../exercise/exercise.service';
import { GetUserId } from '@/util/utils';

@ApiTags('Reminder')
@Controller('reminder')
export class ReminderController {
  constructor(private readonly consumedService: ConsumedService, 
    private readonly hidratationService: HidratationService,
    private readonly exerciseService: ExerciseService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get ' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object with true or false for each reminder',
  })
  async getReminders( @Headers() headers: Record<string, string>): Promise<any> {
    const id_user = GetUserId(headers);
    const reminders = {
      consumed: await this.consumedService.getIfConsumedAlreadyLoadedToday(id_user),
      hidratation: await this.hidratationService.getIfHidratationAlreadyLoadedToday(id_user),
      exercise: await this.exerciseService.getIfExerciseAlreadyLoadedToday(id_user),
    };
    return reminders;
  }
}