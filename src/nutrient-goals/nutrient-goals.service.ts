import { Injectable } from '@nestjs/common';
import db from '../config/db.config';
import { eq } from 'drizzle-orm';
import micronutrientGoalsTable from './nutrient-goals.entity';

@Injectable()
export class NutrientGoalsService {
  async getNutrientGoals(userId: number): Promise<any> {
    const resp = await db
      .select()
      .from(micronutrientGoalsTable)
      .where(eq(micronutrientGoalsTable.id_user, userId));
    return resp;
  }


  async addNutrientGoals(userId: number, nutrientGoals: any): Promise<any> {
    const resp = await db
      .insert(micronutrientGoalsTable)
      .values({ ...nutrientGoals, id_user: userId })
      .returning();
    return resp;
  }


  async updateNutrientGoals(userId: number, nutrientGoals: any): Promise<any> {
    const resp = await db
      .update(micronutrientGoalsTable)
      .set(nutrientGoals)
      .where(eq(micronutrientGoalsTable.id_user, userId))
      .returning();
    return resp;
  }
}