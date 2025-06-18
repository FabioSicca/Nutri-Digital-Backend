import { Controller, UseGuards, Get, Query, Post, Body, Delete, Patch, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlanningService } from './planning.service';
import { PlanningDto } from './dto/planning.dto';
import { GetUserId } from "../util/utils";


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

	@Delete()
	@ApiOperation({ summary: 'Delete a specific planning meal' })
	@UseGuards(JwtAuthGuard)
	public async deletePlanningMeal(@Query('userId') userId: number, @Query('foodId') foodId: number, @Query('day') day: string) {
		return await this.planningService.deletePlanningMeal(userId, foodId, day);
	}

	@Delete('all')
	@ApiOperation({ summary: 'Delete all information about planning meal' })
	@UseGuards(JwtAuthGuard)
	public async deleteAllPlanningMeal() {
		return await this.planningService.deleteAllPlanningMeal();
	}

	@Patch('update')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Update Planning Meal' })
	@ApiResponse({
	  status: 200,
	  description: 'Update planning meal for an user.',
	})
	public async updatePlanningMeal(
	  @Body() planning: PlanningDto,
	  @Request() req: Request,
	  @Query('userId') userId: number,
	  @Query('foodId') foodId: number,
	  @Query('day') day: string
	) {
	  if (!userId) {
			userId = GetUserId(req.headers);
		  }
	  return await this.planningService.updatePlanningMeal(userId, foodId, day, planning);
	}
}
