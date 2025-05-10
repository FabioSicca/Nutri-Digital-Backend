import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Req,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FoodService } from './food.service';
import { Food } from './food.entity';

@ApiTags('Food')
@Controller('food')
export class FoodController {
	constructor(private readonly foodService: FoodService) {}

    @Get()
	@ApiOperation({ summary: 'Get Foods' })
	@ApiResponse({ status: 200, description: 'Returns an array of food' })
	async getUser(@Param('name') name: string): Promise<Food[]> {
		return await this.foodService.getFoods(name);
	}

}