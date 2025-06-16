import db from '../config/db.config';
import { FoodDto } from './food.dto';
import foodTable, { Food } from './food.entity';
import { Injectable } from '@nestjs/common';
import { ilike } from 'drizzle-orm';

@Injectable()
export class FoodService {
	async getFoods(name: string): Promise<Food[]> {
		if (name === undefined || name === null || name === '') {
			return await db.select().from(foodTable);
		} else {
			return await db
				.select()
				.from(foodTable)
				.where(ilike(foodTable.name, `%${name.toLowerCase()}%`));
		}
	}

	async addFood(dto: FoodDto): Promise<Food> {
		const fullName = `${dto.name} (${dto.serving})`;
		const fullRestrictions = dto.restricciones
			? dto.restricciones.join(', ')
			: '';
		const [newFood] = await db
			.insert(foodTable)
			.values({
				name: fullName,
				brand: dto.brand,
				calories: dto.calories,
				href: "",
				sodium: dto.sodium,
				total_fat: dto.total_fat,
				potassium: dto.potassium,
				saturated: dto.saturated,
				total_carbs: dto.total_carbs,
				polyunsaturated: dto.polyunsaturated,
				dietary_fiber: dto.dietary_fiber,
				monounsaturated: dto.monounsaturated,
				sugars: dto.sugars,
				trans: dto.trans,
				protein: dto.protein,
				cholesterol: dto.cholesterol,
				vitamin_a: dto.vitamin_a,
				calcium: dto.calcium,
				vitamin_c: dto.vitamin_c,
				iron: dto.iron,
				restricciones: fullRestrictions,
				tipo: dto.tipo
			})
			.returning();
		return newFood;
	}
}
