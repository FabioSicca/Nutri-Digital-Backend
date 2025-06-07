import {
  Controller,
  UseGuards,
  Get,
  Req,
  Query,
  Body,
  Request,
  Post,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NutrientGoalsService } from './../nutrient-goals/nutrient-goals.service';
import { ConsumedService } from './../consumed/consumed.service';
import { BadRequestException } from '@nestjs/common';
import { GetUserId } from '../util/utils';

@ApiTags('Progress Panel')
@Controller('progress-panel')
export class PorgressPanelController {
  constructor(private readonly nutrientGoalsService: NutrientGoalsService,
    private readonly consumedService: ConsumedService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get information about consumed food today and goals' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object with consumed food and goals',
  })
  async getProgressPanel(@Request() req: Request, @Query('date') date?: string, @Query('userId') userId?: number
  ): Promise<any> {
    if (!userId) {
      userId = GetUserId(req.headers);
    }

    let targetDate: Date;
    if (date) {
      const [year, month, day] = date.split('-').map(Number);
      if (!year || !month || !day) {
        throw new BadRequestException('Invalid date format. Use YYYY-MM-DD.');
      }
      targetDate = new Date(year, month - 1, day); // mes es 0-based
    } else {
      const today = new Date();
      targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }

    const consumedRaw = await this.consumedService.getNutrientsConsumedByDate(userId, targetDate);
    const nutrientGoalsArr = await this.nutrientGoalsService.getNutrientGoals(userId);
    const nutritionGoalsArr = await this.nutrientGoalsService.getNutritionGoals(userId);

    // Format the consumed data to send to the client
    const nutrientGoals = nutrientGoalsArr[0] || {};
    const nutritionGoals = nutritionGoalsArr[0] || {};
    const consumed = Object.fromEntries(
      Object.entries(consumedRaw ?? {}).map(([k, v]) => [k, v === null ? 0 : Number(v)])
    );

    if (!consumed || !nutrientGoals || !nutritionGoals) {
      throw new BadRequestException('No data found');
    }
    const goals = { ...nutritionGoals, ...nutrientGoals };

    return {
      consumed,
      goals,
    };
  }
}

