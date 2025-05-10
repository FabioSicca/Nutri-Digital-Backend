import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BasicController } from './util/basic.controller';
import { UserService } from './user/user.service';

@Module({
	imports: [],
	controllers: [UserController, BasicController],
	providers: [UserService],
})
export class AppModule {}
