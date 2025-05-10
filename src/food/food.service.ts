import db from '../config/db.config';
import foodTable, { Food } from './food.entity';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class FoodService {

    async getFoods(name: string): Promise<Food[]> {
		const resp = await db
			.select()
			.from(foodTable)
			.where(eq(foodTable.name, name.toLowerCase()));
		return resp;
	}
}