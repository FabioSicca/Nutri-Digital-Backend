import db from '../config/db.config';
import usersTable, { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { eq, and } from 'drizzle-orm';
import { NutrientGoalsService } from '../nutrient-goals/nutrient-goals.service';
import { ExerciseGoalsService } from "../exercise-goals/exercise-goals.service";
import { ProfessionalService } from '../professional/professional.service';

@Injectable()
export class UserService {
	constructor(private readonly nutrientGoalsService: NutrientGoalsService, 
		private readonly exerciseGoalsService: ExerciseGoalsService, 
		private readonly professionalService: ProfessionalService) { }
	async getUser(id: number): Promise<User[]> {
		const resp = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.id, id));
		return resp;
	}

	async createUser(userDto: UserDto): Promise<User> {
		const [newUser] = await db
			.insert(usersTable)
			.values({
				user: userDto.user.toLowerCase(),
				lastname: userDto.lastname,
				name: userDto.name,
				password: userDto.password.toLowerCase(),
				role: userDto.role,
			})
			.returning();
		const nutrientGoals = {
			saturated_fat: 0,
			polyunsaturated_fat: 0,
			monounsaturated_fat: 0,
			trans: 0,
			cholesterol: 0,
			sodium: 0,
			potassium: 0,
			fiber: 0,
			sugar: 0,
			vitamin_a: 0,
			vitamin_c: 0,
			calcium: 0,
			iron: 0,
		};
		const nutritionGoals = {
			calories: 0,
			total_fat: 0,
			total_carbs: 0,
			protein: 0,
		};

		const exerciseGoals = {
			calories_burned_goal: 0
		};

		if (userDto.role.toLowerCase() === 'professional') {
			await this.professionalService.createProfessional(newUser.id, `${userDto.name} ${userDto.lastname}`,userDto.specialty ?? "Nutricionista");
		}

		this.exerciseGoalsService.addExerciseGoals(newUser.id, exerciseGoals);

		this.nutrientGoalsService.addNutrientGoals(
			newUser.id,
			nutrientGoals,
		);
		this.nutrientGoalsService.addNutritionGoals(
			newUser.id,
			nutritionGoals,
		);
		return newUser;
	}

	async findUserByEmailAndPassword(user: string, password: string) {
		const userdb = await db
			.select()
			.from(usersTable)
			.where(
				and(
					eq(usersTable.user, user),
					eq(usersTable.password, password),
				),
			);
		return userdb;
	}
}
