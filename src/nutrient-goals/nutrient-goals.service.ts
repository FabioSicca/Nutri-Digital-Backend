import { Injectable } from '@nestjs/common';
import db from '../config/db.config';
import { eq } from 'drizzle-orm';
import micronutrientGoalsTable from './nutrient-goals.entity';
import nutritionGoalsTable from './nutrition-goals.entity';

@Injectable()
export class NutrientGoalsService {
  async getNutrientGoals(userId: number): Promise<any> {
    const resp = await db
      .select()
      .from(micronutrientGoalsTable)
      .where(eq(micronutrientGoalsTable.id_user, userId));
    return resp;
  }

  async getNutritionGoals(userId: number): Promise<any> {
    const resp = await db
      .select()
      .from(nutritionGoalsTable)
      .where(eq(nutritionGoalsTable.id_user, userId));
    return resp;
  }


  async addNutrientGoals(userId: number, nutrientGoals: any): Promise<any> {
    const resp = await db
      .insert(micronutrientGoalsTable)
      .values({ ...nutrientGoals, id_user: userId })
      .returning();
    return resp;
  }

  async addNutritionGoals(userId: number, nutritionGoals: any): Promise<any> {
    const resp = await db
      .insert(nutritionGoalsTable)
      .values({ ...nutritionGoals, id_user: userId })
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

  async updateNutritionGoals(userId: number, nutritionGoals: any): Promise<any> {
    const resp = await db
      .update(nutritionGoalsTable)
      .set(nutritionGoals)
      .where(eq(nutritionGoalsTable.id_user, userId))
      .returning();
    return resp;
  }
}