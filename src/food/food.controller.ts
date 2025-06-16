import { Controller, UseGuards, Get, Query, Post, Body} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FoodService } from './food.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FoodDto } from './food.dto';

@ApiTags('Food')
@Controller('food')
export class FoodController {
	constructor(private readonly foodService: FoodService) {}

	@Get('search')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get Foods' })
	@ApiResponse({ status: 200, description: 'Returns an array of food' })
	async getUser(@Query('name') name: string): Promise<any> {
		return await this.foodService.getFoods(name);
	}

	@Post('add')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add Food' })
	@ApiResponse({ status: 201, description: 'Creates a food object.' })
	async addFood(@Body() newFood: FoodDto): Promise<any> {
		return await this.foodService.addFood(newFood);
	}

}
