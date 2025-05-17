import {
	Body,
	Controller,
	UseGuards,
	Get,
	Param,
	Res,
	Post,
	Req,
	UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { UserService as UserService } from './user.service';
import { User } from './user.entity';
import { UserDto, LoginDto } from './user.dto';
import * as jwt from 'jsonwebtoken';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get User' })
	@ApiResponse({ status: 200, description: 'Returns a user object.' })
	async getUser(@Param('id') id: number): Promise<User[]> {
		return await this.userService.getUser(id);
	}

	@Post()
	@ApiOperation({ summary: 'Create User' })
	@ApiResponse({ status: 201, description: 'Creates a user object.' })
	public async createUser(
		@Body() user: UserDto,
	){
		return await this.userService.createUser(user);
	}

	@Post('login')
	@ApiOperation({ summary: 'Login User' })
	@ApiResponse({ status: 200, description: 'Logs in a user and returns user ID.' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
	public async login(@Body() user: LoginDto, @Res() res: Response) {
		const currentUser = await this.userService.findUserByEmailAndPassword(
			user.user,
			user.password,
		);
		if (!currentUser[0]) {
            throw new UnauthorizedException();
        }
		const claims = { id: currentUser[0].id,
			name: currentUser[0].user,
		 };
		if (!process.env.JWT_SECRET) {
			throw new Error('JWT_SECRET is not defined in environment variables');
		}
		const token = jwt.sign(claims, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.setHeader('user-id', currentUser[0].id);
        return res.status(200).json({
            userId: currentUser[0].id,
            token: token,
        });
	}
}
