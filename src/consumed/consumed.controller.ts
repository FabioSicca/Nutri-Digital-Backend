import {
	Controller,
	UseGuards,
	Get,
	Query,
    Post,
    Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConsumedService } from './consumed.service';
import { ConsumedDto } from './consumed.dto';

@ApiTags('Consumed')
@Controller('consumed')
export class ConsumedController {
	constructor(private readonly consumedService: ConsumedService) {}

	@Post('/')
    @UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add Data for a Food' })
	@ApiResponse({ status: 201, description: 'Add Data for a Food.' })
	public async addFoodConsumed(
		@Body() consumed: ConsumedDto,
	){
		return await this.consumedService.addFoodConsumed(consumed);
	}

}