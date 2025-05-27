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
import { PatientService } from './patient.service';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Get('myprofessional')
    @ApiOperation({ summary: 'Get professional for a client' })
    @UseGuards(JwtAuthGuard)
    public async getMyProfessional(@Query('id') id: number) {
        return await this.patientService.getProfessional(id);
    }

    @Get('mypatients')
    @ApiOperation({ summary: 'Get patients for a professional' })
    @UseGuards(JwtAuthGuard)
    public async getMyPatients(@Query('id') id: number) {
        return await this.patientService.getPatientst(id);
    }
}