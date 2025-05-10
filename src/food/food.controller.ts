import {
	Controller,
	UseGuards,
	Get,
	Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FoodService } from './food.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Food')
@Controller('food')
export class FoodController {
	constructor(private readonly foodService: FoodService) {}

    @Get('search')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get Foods' })
	@ApiResponse({ status: 200, description: 'Returns an array of food' })
	async getUser(@Query('name') name: string): Promise<any> {
		return {
			data: await this.foodService.getFoods(name)
		};
	}

}