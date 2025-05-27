import {
	Controller,
	UseGuards,
	Get,
	Query,
	Post,
	Request,
	Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUserId } from '../util/utils';
import { RequestService } from './request.service';

@ApiTags('Request')
@Controller('request')
export class RequestController {
    constructor(private readonly requestService: RequestService) { }

    @Get('professional')
    @ApiOperation({ summary: 'Get Request active for a professional' })
    @UseGuards(JwtAuthGuard)
    public async getRequestForProfessional(@Query('id') id: number) {
        return await this.requestService.getProfessionalRequests(id);
    }

    @Get('client')
    @ApiOperation({ summary: 'Get Request active for a client' })
    @UseGuards(JwtAuthGuard)
    public async getRequestForUser(@Query('id') id: number) {
        return await this.requestService.getUserRequest(id);
    }

    @Post('send')
    @ApiOperation({ summary: 'Send a request for a professional' })
    @UseGuards(JwtAuthGuard)
    public async SendRequestToMedic(@Query('id') id: number, @Request() req: Request,) {
        const userId = GetUserId(req.headers);
        return await this.requestService.SendRequest(id, userId);
    }

    @Post('cancel')
    @ApiOperation({ summary: 'Cancel a request' })
    @UseGuards(JwtAuthGuard)
    public async CancelARequest(@Query('id') id: number) {
        return await this.requestService.CancelRequest(id);
    }

    @Post('approve')
    @ApiOperation({ summary: 'Approve a request' })
    @UseGuards(JwtAuthGuard)
    public async Approvearequest(@Query('id') id: number) {
        return await this.requestService.ApproveRequest(id);
    }
}