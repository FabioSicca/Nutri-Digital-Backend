import {
	Controller,
	UseGuards,
	Get,
	Query,
	Post,
	Body,
	Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConsumedService } from './consumed.service';
import { ConsumedDto } from './dto/consumed.dto';
import { GetDay } from '../util/utils';

@ApiTags('Consumed')
@Controller('consumed')
export class ConsumedController {
	constructor(private readonly consumedService: ConsumedService) { }

	@Post()
	@ApiOperation({ summary: 'Add consume for a client' })
	@UseGuards(JwtAuthGuard)
	public async addFoodConsumed(@Body() consumed: ConsumedDto) {
		return await this.consumedService.addFoodConsumed(consumed);
	}

	@Delete()
	@ApiOperation({ summary: 'Delete a food consumed by an user' })
	@UseGuards(JwtAuthGuard)
	public async deleteFoodConsumed(@Query('id') id: number) {
		return await this.consumedService.deleteFoodConsumed(id);
	}

	@Get()
	@ApiOperation({ summary: 'Get consumed food for a client' })
	@UseGuards(JwtAuthGuard)
	public async getFoodConsumed(@Query('userId') userId: number, @Query('date') date: string) {
		let day = GetDay(date);
		return await this.consumedService.getFoodConsumedToday(userId, day);
	}
}
