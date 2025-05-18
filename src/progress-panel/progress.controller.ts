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
    private readonly consumedService: ConsumedService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
	  @ApiOperation({ summary: 'Get information about consumed food today and goals' })
	  @ApiResponse({
		status: 200,
		description: 'Returns an object with consumed food and goals',
	  })
    async getProgressPanel(@Request() req: Request,): Promise<any> {
      let userId = GetUserId(req.headers);
      const consumedRaw = await this.consumedService.getNutrientsConsumedToday(userId);
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

