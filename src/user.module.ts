import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BasicController } from './util/basic.controller';
import { UserService } from './user/user.service';
import { FoodService } from './food/food.service';
import { FoodController } from './food/food.controller';
import { ConsumedController } from './consumed/consumed.controller';
import { ConsumedService } from './consumed/consumed.service';

@Module({
	imports: [],
	controllers: [UserController, FoodController, BasicController, ConsumedController],
	providers: [UserService, FoodService, ConsumedService],
})
export class AppModule {}
