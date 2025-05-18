import {
	Controller,
	UseGuards,
	Get,
	Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProfessionalService } from './professional.service';

@ApiTags('Food')
@Controller('professional')
export class ProfessionalController {
	constructor(private readonly professionalService: ProfessionalService) {}

    @Get()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get All Professionals' })
	@ApiResponse({ status: 200, description: 'Returns an array with all professionals info' })
	async getProfessionals(): Promise<any> {
		return await this.professionalService.getProfessionals();
	}

}