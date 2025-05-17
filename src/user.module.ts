import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BasicController } from './util/basic.controller';
import { UserService } from './user/user.service';
import { FoodService } from './food/food.service';
import { FoodController } from './food/food.controller';
import { ConsumedController } from './consumed/consumed.controller';
import { ConsumedService } from './consumed/consumed.service';
import { HidratationController } from './hidratation/hidratation.controller';
import { HidratationService } from './hidratation/hidratation.service';

@Module({
	imports: [],
	controllers: [UserController, FoodController, BasicController, ConsumedController, HidratationController],
	providers: [UserService, FoodService, ConsumedService, HidratationService],
})
export class AppModule {}
