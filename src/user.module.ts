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
import { HidratationController } from './hidratation/hidratation.controller';
import { HidratationService } from './hidratation/hidratation.service';
import { ProfessionalController } from './professional/professional.controller';
import { ProfessionalService } from './professional/professional.service';
import { PorgressPanelController } from './progress-panel/progress.controller';
import { RequestService } from './request-professional/request.service';
import { RequestController } from './request-professional/request.controller';

@Module({
	imports: [],
	controllers: [
		UserController,
		FoodController,
		BasicController,
		ConsumedController,
		HidratationController,
		NutrientGoalsController,
		ProfessionalController,
		PorgressPanelController,
		RequestController
	],
	providers: [
		UserService,
		FoodService,
		ConsumedService,
		HidratationService,
		NutrientGoalsService,
		ProfessionalService,
		RequestService
	],
})
export class AppModule {}
