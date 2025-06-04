import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ReportService } from './report.service';
import { ReportType } from './report.types';

@ApiTags('Report')
@Controller('report')
export class ReportController {
	constructor(private readonly reportService: ReportService) {}

	@Get()
	//@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get Report for user' })
	@ApiResponse({
		status: 200,
		description: 'Returns an array of info of last 30 days',
	})
	async getReport(@Query('id_user') id_user: number): Promise<any> {
        return await this.reportService.getReport(id_user);
	}
}
