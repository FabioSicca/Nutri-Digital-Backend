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
import { ReviewsService } from './professional/reviews.service';
import { ReviewsController } from './professional/reviews.controller';
import { PorgressPanelController } from './progress-panel/progress.controller';
import { RequestService } from './request-professional/request.service';
import { RequestController } from './request-professional/request.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesController } from './messages/messages.controller';
import { PatientService } from './request-professional/patient.service';
import { PatientController } from './request-professional/patient.controller';
import { PlaceService } from './place/place.service';
import { PlaceController } from './place/place.controller';
import { ExerciseGoalsController } from './exercise-goals/excercise-goals.controller';
import { ExerciseGoalsService } from './exercise-goals/exercise-goals.service';
import { ExerciseController } from './exercise/exercise.controller';
import { ExerciseService } from './exercise/exercise.service';
import { ReportController } from './report/report.controller';
import { ReportService } from './report/report.service';
import { PlanningController } from './planning/planning.controller';
import { PlanningService } from './planning/planning.service';
import { ReminderController } from './reminders/reminders.controller';

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
		ReviewsController,
		PorgressPanelController,
		RequestController,
		MessagesController,
		PatientController,
		PlaceController,
		ExerciseGoalsController,
		ExerciseController,
		ReportController,
		PlanningController,
		ReminderController
	],
	providers: [
		UserService,
		FoodService,
		ConsumedService,
		HidratationService,
		NutrientGoalsService,
		ProfessionalService,
		ReviewsService,
		RequestService,
		MessagesService,
		PatientService,
		PlaceService,
		ExerciseGoalsService,
		ExerciseService,
		ReportService,
		PlanningService
	],
})
export class AppModule {}
