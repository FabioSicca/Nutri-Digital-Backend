import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BasicController } from './util/basic.controller';
import { UserService } from './user/user.service';
import { FoodService } from './food/food.service';
import { FoodController } from './food/food.controller';

@Module({
	imports: [],
	controllers: [UserController, FoodController, BasicController],
	providers: [UserService, FoodService],
})
export class AppModule {}
