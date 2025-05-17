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
import { DeleteConsumedDto } from './dto/delete.consumed.dto';

@ApiTags('Consumed')
@Controller('consumed')
export class ConsumedController {
	constructor(private readonly consumedService: ConsumedService) {}

	@Post()
	@ApiOperation({ summary: 'Add consume for a client' })
	public async addFoodConsumed(
		@Body() consumed: ConsumedDto,
	){
		return await this.consumedService.addFoodConsumed(consumed);
	}

	@Delete()
	@ApiOperation({ summary: 'Delete a food consumed by an user' })
	public async deleteFoodConsumed(
		@Body() body: DeleteConsumedDto,
	){
		return await this.consumedService.deleteFoodConsumed(body);
	}

}