import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import consumedTable, { Consumed } from './consumed.entity';
import { ConsumedDto } from './dto/consumed.dto';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';
import { DeleteConsumedDto } from './dto/delete.consumed.dto';
import { sql } from 'drizzle-orm';


@Injectable()
export class ConsumedService {
	async addFoodConsumed(consumedDto: ConsumedDto): Promise<Consumed> {
		const user = await this.findUserById(consumedDto.id_user);
		const food = await this.findFoodById(consumedDto.id_food);

		if (!user) throw new Error('User not found');
		if (!food) throw new Error('Food not found');

		return await this.insertConsumedFood(consumedDto, user.id, food.id);
	}

	async deleteFoodConsumed(id: number) {
		const result = await db
			.delete(consumedTable)
			.where(eq(consumedTable.id, id));
		if (result.rowCount === 0) throw new Error('No records deleted');
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

	private async insertConsumedFood(
		dto: ConsumedDto,
		userId: number,
		foodId: number,
	): Promise<Consumed> {
		const today = new Date();
		const dateOnly = new Date(today.toISOString());

		const [newConsumed] = await db
			.insert(consumedTable)
			.values({
				portion: dto.portion,
				unit: dto.unit,
				type_of_food: dto.type_of_food,
				id_user: userId,
				id_food: foodId,
				date_consumed: dateOnly,
			})
			.returning();

		return newConsumed;
	}

	async getFoodConsumedToday(userId: number, date: Date) {
		const dateOnly = new Date(date.toISOString());

		const consumed = await db
			.select()
			.from(consumedTable)
			.where(
				and(
					eq(consumedTable.id_user, userId),
					eq(consumedTable.date_consumed, dateOnly),
				),
			)
			.innerJoin(
				foodTable,
				eq(foodTable.id, consumedTable.id_food),
			);

		const data = consumed.map(row => ({
			id: row.consumed.id,
			name: row.food.name,
			calories: row.food.calories * Number(row.consumed.portion),
			total_carbs: row.food.total_carbs * Number(row.consumed.portion),
			total_fat: row.food.total_fat * Number(row.consumed.portion),
			protein: row.food.protein * Number(row.consumed.portion),
			sodium: row.food.sodium * Number(row.consumed.portion),
			sugars: row.food.sugars * Number(row.consumed.portion),
			type_of_food: row.consumed.type_of_food
		}));

		return data;
	}


	async getNutrientsConsumedByDate(userId: number, date: Date) {
		const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

		const [result] = await db
			.select({
				calories: sql<number>`SUM(${foodTable.calories})`,
				total_fat: sql<number>`SUM(${foodTable.total_fat})`,
				total_carbs: sql<number>`SUM(${foodTable.total_carbs})`,
				protein: sql<number>`SUM(${foodTable.protein})`,
				saturated_fat: sql<number>`SUM(${foodTable.saturated})`,
				polyunsaturated_fat: sql<number>`SUM(${foodTable.polyunsaturated})`,
				monounsaturated_fat: sql<number>`SUM(${foodTable.monounsaturated})`,
				trans: sql<number>`SUM(${foodTable.trans})`,
				cholesterol: sql<number>`SUM(${foodTable.cholesterol})`,
				sodium: sql<number>`SUM(${foodTable.sodium})`,
				potassium: sql<number>`SUM(${foodTable.potassium})`,
				fiber: sql<number>`SUM(${foodTable.dietary_fiber})`,
				sugar: sql<number>`SUM(${foodTable.sugars})`,
				vitamin_a: sql<number>`SUM(${foodTable.vitamin_a})`,
				vitamin_c: sql<number>`SUM(${foodTable.vitamin_c})`,
				calcium: sql<number>`SUM(${foodTable.calcium})`,
				iron: sql<number>`SUM(${foodTable.iron})`,
			})
			.from(consumedTable)
			.innerJoin(foodTable, eq(consumedTable.id_food, foodTable.id))
			.where(
				and(
					eq(consumedTable.id_user, userId),
					eq(consumedTable.date_consumed, dateOnly),
				)
			);

		return Object.fromEntries(
			Object.entries(result ?? {}).map(([k, v]) => [k, v ?? 0])
		);
	}

	async getIfConsumedAlreadyLoadedToday(id_user: number): Promise<boolean> {
		const today = new Date();
		const dateOnly = new Date(today.toISOString());

		const result = await db
			.select()
			.from(consumedTable)
			.where(
				and(
					eq(consumedTable.id_user, id_user),
					eq(consumedTable.date_consumed, dateOnly),
				),
			);

		return result.length > 0;
	}

}
