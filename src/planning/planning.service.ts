import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';
import { sql } from 'drizzle-orm';
import { PlanningDto } from './dto/planning.dto';
import planningTable from './planning.entity';

@Injectable()
export class PlanningService {

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

        console.log('antes de insertar');
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
            console.log('despues de insertar');
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

}