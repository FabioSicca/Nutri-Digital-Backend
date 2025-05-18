import {
	Controller,
	UseGuards,
	Get,
	Query,
	Body,
	Request,
	Post,
	Patch,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NutrientGoalsDto } from './nutrient-goals.dto';
import { NutritionGoalsDto } from './nutrition-goals.dto';
import { NutrientGoalsService } from './nutrient-goals.service';
import { BadRequestException } from '@nestjs/common';
import { GetUserId } from '../util/utils';

@ApiTags('Nutrient Goals')
@Controller('nutrient-goals')
export class NutrientGoalsController {
	constructor(private readonly nutrientGoalsService: NutrientGoalsService) {}

	@Get('macro')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get Nutrition Goals' })
	@ApiResponse({
		status: 200,
		description: 'Returns an array of nutrition goals',
	})
	async getNutritionGoals(@Query('userId') userId: number): Promise<any> {
		return await this.nutrientGoalsService.getNutritionGoals(userId);
	}

	@Get('micro')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get Nutrient Goals' })
	@ApiResponse({
		status: 200,
		description: 'Returns an array of nutrient goals',
	})
	async getNutrientGoals(@Query('userId') userId: number): Promise<any> {
		return await this.nutrientGoalsService.getNutrientGoals(userId);
	}

	@Post('micro/add')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add Nutrient Goals' })
	@ApiResponse({
		status: 201,
		description: 'Creates a nutrient goal object.',
	})
	public async addNutrientGoals(
		@Body() nutrientGoals: NutrientGoalsDto,
		@Request() req: Request,
	) {
		const userIdFromToken = GetUserId(req.headers);
		return await this.nutrientGoalsService.addNutrientGoals(
			userIdFromToken,
			nutrientGoals,
		);
	}

	@Post('macro/add')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add Nutrition Goals' })
	@ApiResponse({
		status: 201,
		description: 'Creates a nutrition goal object.',
	})
	public async addNutritionGoals(
		@Body() nutritionGoals: NutritionGoalsDto,
		@Request() req: Request,
	) {
		const userIdFromToken = GetUserId(req.headers);
		return await this.nutrientGoalsService.addNutritionGoals(
			userIdFromToken,
			nutritionGoals,
		);
	}

	@Patch('micro/update')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Update Nutrient Goals' })
	@ApiResponse({
		status: 200,
		description: 'Updates a nutrient goal object.',
	})
	public async updateNutrientGoals(
		@Body() nutrientGoals: NutrientGoalsDto,
		@Request() req: Request,
	) {
		const user_id = GetUserId(req.headers);
		if (!user_id) {
			throw new BadRequestException('User ID is required');
		}
		return await this.nutrientGoalsService.updateNutrientGoals(
			user_id,
			nutrientGoals,
		);
	}

	@Patch('macro/update')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Update Nutrition Goals' })
	@ApiResponse({
		status: 200,
		description: 'Updates a nutrition goal object.',
	})
	public async updateNutritionGoals(
		@Body() nutritionGoals: NutritionGoalsDto,
		@Request() req: Request,
	) {
		const user_id = GetUserId(req.headers);
		if (!user_id) {
			throw new BadRequestException('User ID is required');
		}
		return await this.nutrientGoalsService.updateNutritionGoals(
			user_id,
			nutritionGoals,
		);
	}
}
