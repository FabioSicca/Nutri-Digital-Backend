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

        if (userPlanningMeal.length === 0) return [];

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
        
        const response = {
            total_fat: nutritionGoals.reduce((sum, current) => sum + current.total_fat,0),
            total_carbs: nutritionGoals.reduce((sum, current) => sum + current.total_carbs,0),
            protein: nutritionGoals.reduce((sum, current) => sum + current.protein,0),
            calories: nutritionGoals.reduce((sum, current) => sum + current.calories,0)
        }

        return response;
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

        const response = {
            total_fat: planningMealFood.reduce((sum, current) => sum + Number(current.planning.portion) * current.food.total_fat,0),
            total_carbs: planningMealFood.reduce((sum, current) => sum + Number(current.planning.portion) * current.food.total_carbs,0),
            protein: planningMealFood.reduce((sum, current) => sum + Number(current.planning.portion) * current.food.protein,0),
            calories: planningMealFood.reduce((sum, current) => sum + Number(current.planning.portion) * current.food.calories,0)
        } 

        return response;
    }

    async deletePlanningMeal(userId: number, foodId: number, day: string) {
        const result = await db
            .delete(planningTable)
            .where(
                and(
                    eq(planningTable.id_user, userId),
                    eq(planningTable.id_food, foodId),
                    eq(planningTable.day, day)
                )
            );
        if (result.rowCount === 0) throw new Error('No planning meal deleted');
	}

    async deleteAllPlanningMeal() {
        const result = await db.delete(planningTable);
        return { deletedRows: result.rowCount };
	}

    async updatePlanningMeal(userId: number, foodId: number, day: string, planning: PlanningDto) {
        const resp = await db
            .update(planningTable)
            .set(planning)
            .where(
                and(
                    eq(planningTable.id_user, userId),
                    eq(planningTable.id_food, foodId),
                    eq(planningTable.day, day)
                )
            )
            .returning();
        return resp;
	}
}