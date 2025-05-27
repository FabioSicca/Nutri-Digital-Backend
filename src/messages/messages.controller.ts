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
import { MessagesService } from './messages.service';
import { MessageCreationDto } from './messages.dto';
import { GetUserId } from '@/util/utils';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
	constructor(private readonly messagesService: MessagesService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Add message' })
	public async addMessage(
		@Body() req: MessageCreationDto,
		@Headers() headers: Record<string, string>,
	) {
		let sender_user_id = GetUserId(headers);
		return await this.messagesService.addMessage(
			sender_user_id,
			req.recipient_user_id,
			req.text_content,
		);
	}
	
	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get messages exchanged' })
	public async getMessagesExchanged(
		@Query('target_user_id') target_user_id: number,
		@Headers() headers: Record<string, string>,
	) {
		let my_user_id = GetUserId(headers);
		return await this.messagesService.getMessagesExchanged(
			my_user_id,
			target_user_id,
		);
	}

}
