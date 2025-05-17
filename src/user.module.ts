import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BasicController } from './util/basic.controller';
import { UserService } from './user/user.service';
import { FoodService } from './food/food.service';
import { FoodController } from './food/food.controller';
import { ConsumedController } from './consumed/consumed.controller';
import { ConsumedService } from './consumed/consumed.service';
import { NutrientGoalsController } from './nutrient-goals/nutrient-goals.controller';
import { NutrientGoalsService } from './nutrient-goals/nutrient-goals.service';

@Module({
	imports: [],
	controllers: [UserController, FoodController, BasicController, ConsumedController, NutrientGoalsController],
	providers: [UserService, FoodService, ConsumedService, NutrientGoalsService],
})
export class AppModule {}
