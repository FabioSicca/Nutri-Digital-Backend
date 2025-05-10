import db from '../config/db.config';
import foodTable, { Food } from './food.entity';
import { Injectable } from '@nestjs/common';
import { FoodDto } from './food.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class FoodService {

    async getFoods(name: string): Promise<Food[]> {
        //todo: evaluar si hago un lower-case para la busqueda
		const resp = await db
			.select()
			.from(foodTable)
			.where(eq(foodTable.name, name));
		return resp;
	}
}