import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';
import { sql } from 'drizzle-orm';
import { PlanningDto } from './dto/planning.dto';
import planningTable from './planning.entity';
import { NutrientGoalsService } from '../nutrient-goals/nutrient-goals.service';

@Injectable()
export class PlanningService {

    constructor(private readonly nutrientGoalsService: NutrientGoalsService) {}

	async addPlanningMeal(planning: PlanningDto) {
        const user = await this.findUserById(planning.id_user);
		const food = await this.findFoodById(planning.id_food);
        
        if (!user) throw new Error('User not found');
		if (!food) throw new Error('Food not found');

		return await this.insertPlanningMeal(planning);
	}

    private async insertPlanningMeal(planning: PlanningDto) {
        const today = new Date();
        const dateOnly = new Date(today.toISOString());

        const [newPlanning] = await db
            .insert(planningTable)
            .values({
                portion: planning.portion,
                day: planning.day,
                name_food: planning.name_food,
                id_user: planning.id_user,
                id_food: planning.id_food,
                date_planning: dateOnly,
            })
            .returning();

        return newPlanning;
    }
    

    private async findUserById(id: number) {
		const [user] = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.id, id));
		return user;
	}

	private async findFoodById(id: number) {
		const [food] = await db
			.select()
			.from(foodTable)
			.where(eq(foodTable.id, id));
		return food;
	}

    async getPlanningMeal(userId: number, day: string) {
		const userPlanningMeal = await db
            .select()
            .from(planningTable)
            .where(
                and(
                    eq(planningTable.id_user, userId),
                    eq(planningTable.day, day)
                )
            );

        if (userPlanningMeal.length === 0) throw new Error('Planning not found');

        const macrosPlanningMeal = await this.getFoodForPlanning(userId);

        const macrosGoals = await this.getMacrosGoals(userId);

        const response = {
            userPlanningMeal: userPlanningMeal,
            macrosPlanningMeal: macrosPlanningMeal,
            macrosGoals: macrosGoals
        }
        
        return response;
	}

    private async getMacrosGoals(userId: number) {
        const nutritionGoals: any[] = await this.nutrientGoalsService.getNutritionGoals(userId);
        const totalMacros = nutritionGoals.reduce((sum, current) => {
            return sum + current.total_fat + current.total_carbs + current.protein;
        }, 0);

        return totalMacros;
    }

    private async getFoodForPlanning(userId: number) {
        const planningMealFood = await db
            .select()
            .from(planningTable)
            .where(eq(planningTable.id_user, userId))
            .innerJoin(
                foodTable,
                eq(foodTable.id, planningTable.id_food),
            );

        const totalMacros = planningMealFood.reduce((sum, current) => {
                return sum + Number(current.planning.portion) * (current.food.total_fat + current.food.total_carbs + current.food.protein);
        }, 0);

        return totalMacros;
    }
}