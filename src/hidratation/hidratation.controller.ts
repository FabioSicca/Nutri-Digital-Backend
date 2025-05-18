import {
	Controller,
	UseGuards,
	Post,
	Body,
	Headers,
	Query,
	Get,
	Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HidratationService } from './hidratation.service';
import { HidratationCreateDto } from './hidratation.dto';
import { GetUserId } from '@/util/utils';

@ApiTags('Hidratation')
@Controller('hidratation')
export class HidratationController {
	constructor(private readonly consumedService: HidratationService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add hidratation for a client' })
	public async addHidratationConsumed(
		@Body() req: HidratationCreateDto,
		@Headers() headers: Record<string, string>,
	) {
		let userId = GetUserId(headers);
		return await this.consumedService.addHidratationConsumed(
			userId,
			req.mililiters,
		);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get hidrations for a client' })
	public async GetHidratationConsumed(
		@Query('date') date: string,
		@Headers() headers: Record<string, string>,
	) {
		let userId = GetUserId(headers);
		const parsedDate = new Date(date);
		return await this.consumedService.getHidratationConsumed(
			userId,
			parsedDate,
		);
	}

	@Delete()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get hidrations for a client' })
	public async DeleteHidratationConsumed(
		@Query('id') id: number,
		@Headers() headers: Record<string, string>,
	) {
		return await this.consumedService.deleteHidratationConsumed(
			id
		);
	}
}
