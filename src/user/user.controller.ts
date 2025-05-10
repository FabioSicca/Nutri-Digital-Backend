import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Req,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService as UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get(':id')
	@ApiOperation({ summary: 'Get User' })
	@ApiResponse({ status: 200, description: 'Returns a user object.' })
	async getUser(@Param('id') id: number): Promise<User[]> {
		return await this.userService.getUser(id);
	}

	@Post('/')
	@ApiOperation({ summary: 'Create User' })
	@ApiResponse({ status: 201, description: 'Creates a user object.' })
	public async createUser(
		@Body() user: UserDto,
	){
		return await this.userService.createUser(user);
	}
}
