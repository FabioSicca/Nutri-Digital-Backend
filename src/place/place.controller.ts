import { Controller, UseGuards, Get, Query, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlaceService } from './place.service';

@ApiTags('Place')
@Controller('place')
export class PlaceController {
    constructor(private readonly placeService: PlaceService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Get All Places' })
    @ApiResponse({
        status: 200,
        description: 'Returns an array with all places',
    })
    async getPlaces(@Query('origin') origin: string): Promise<any> {
        return await this.placeService.getPlaces(origin);
    }
}