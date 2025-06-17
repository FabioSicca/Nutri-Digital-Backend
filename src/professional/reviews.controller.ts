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
import { ReviewsService } from './reviews.service';
import { ReviewCreationDto } from './reviews.dto';
import { GetUserId, GetDay } from '@/util/utils';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
	constructor(private readonly reviewsService: ReviewsService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add review' })
	public async addMessage(
		@Body() req: ReviewCreationDto,
		@Headers() headers: Record<string, string>,
	) {
		let user_id = GetUserId(headers);		
		let today = new Date();
		let review_date = new Date(today.toISOString());
		return await this.reviewsService.addReview(
			user_id,
			req.professional_id,
			req.score,
			req.comment,
			review_date,
		);
	}
	
	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get reviews of professional' })
	public async getReviewsOfProfessional(
		@Query('professional_id') professional_id: number,
		@Headers() headers: Record<string, string>,
	) {
		return await this.reviewsService.getReviewsOfProfessional(
			professional_id,
		);
	}
}