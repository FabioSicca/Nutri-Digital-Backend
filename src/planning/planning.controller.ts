import { Controller, UseGuards, Get, Query, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlanningService } from './planning.service';
import { PlanningDto } from './dto/planning.dto';


@ApiTags('Planning')
@Controller('planning')
export class PlanningController {
	constructor(private readonly planningService: PlanningService) {}

	@Post()
	@ApiOperation({ summary: 'Add information about planning meal' })
	@UseGuards(JwtAuthGuard)
	public async addPlanningMeal(@Body() planning: PlanningDto) {
		return await this.planningService.addPlanningMeal(planning);
	}

	@Get()
	@ApiOperation({ summary: 'Get information about planning meal' })
	@UseGuards(JwtAuthGuard)
	public async getPlanningMeal(@Query('userId') userId: number, @Query('day') day: string) {
		return await this.planningService.getPlanningMeal(userId, day);
	}
}
