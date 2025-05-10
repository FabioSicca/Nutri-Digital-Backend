import {
	Body,
	Controller,
	Delete,
	Get,
	Query,
	Req,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FoodService } from './food.service';

@ApiTags('Food')
@Controller('food')
export class FoodController {
	constructor(private readonly foodService: FoodService) {}

    @Get('search')
	@ApiOperation({ summary: 'Get Foods' })
	@ApiResponse({ status: 200, description: 'Returns an array of food' })
	async getUser(@Query('name') name: string): Promise<any> {
		return {
			data: await this.foodService.getFoods(name)
		};
	}

}