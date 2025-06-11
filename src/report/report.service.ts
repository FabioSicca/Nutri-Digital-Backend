import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq, sql, gte, and } from 'drizzle-orm';
import exerciseDoneTable from '../exercise/exercise-done.entity';
import hidratationTable from '../hidratation/hidratation.entity';
import { subDays } from 'date-fns';
import consumedTable from '../consumed/consumed.entity';
import foodTable from '@/food/food.entity';

@Injectable()
export class ReportService {
      

    async getReport(id_user: number): Promise<any> {
        const thirtyDaysAgo = subDays(new Date(), 30);
    
        const foodConsumed = await this.getFoodConsumed(id_user, thirtyDaysAgo);

        const waterConsumed = await this.getWaterConsumed(id_user, thirtyDaysAgo);

        const caloriesBurnedUser = await this.getCaloriesBurned(id_user, thirtyDaysAgo);

        const response = {
            water: waterConsumed,
            caloriesBurned: caloriesBurnedUser,
            foodConsumed: foodConsumed
        }

        return response;
    }

    private async getFoodConsumed(id_user: number, thirtyDaysAgo: Date) {
        const foodConsumed = await db
            .select({
                date: consumedTable.date_consumed,
                total_carbs: sql<number> `SUM(${foodTable.total_carbs} * ${consumedTable.portion})`.as("total_carbs"), 
                calories: sql<number> `SUM(${foodTable.calories}* ${consumedTable.portion})`.as("calories"),
                total_fat: sql<number> `SUM(${foodTable.total_fat}* ${consumedTable.portion})`.as("total_fat"),
                protein: sql<number> `SUM(${foodTable.protein}* ${consumedTable.portion})`.as("protein")
            })
            .from(consumedTable)
            .innerJoin(
                foodTable,
                eq(foodTable.id, consumedTable.id_food)
            )
            .where(
                and(
                    eq(consumedTable.id_user, id_user),
                    gte(consumedTable.date_consumed, thirtyDaysAgo)
                )
            )
            .groupBy(consumedTable.date_consumed);
        return foodConsumed;
    }

    async getWaterConsumed(id_user: number, thirtyDaysAgo: any) {
        const waterConsumed = await db
                    .select({
                        date: hidratationTable.date_consumed,
                        mililiters: sql<number>`SUM(${hidratationTable.mililiters})`
                    })
                    .from(hidratationTable)
                    .where(
                        and(
                            eq(hidratationTable.id_user, id_user),
                            gte(hidratationTable.date_consumed, thirtyDaysAgo)
                        )
                    )
                    .groupBy(hidratationTable.date_consumed);
        
        return waterConsumed;
    }

    async getCaloriesBurned(id_user: number, thirtyDaysAgo: any) {
        const caloriesBurnedUser = await db
                .select({
                    date: exerciseDoneTable.date,
                    calories_burned: sql<number>`SUM(${exerciseDoneTable.calories_burned})`
                })
                .from(exerciseDoneTable)
                .where(
                    and(
                        eq(exerciseDoneTable.id_user, id_user),
                        gte(exerciseDoneTable.date, thirtyDaysAgo)
                    )
                )
                .groupBy(exerciseDoneTable.date);
        
        const formatted = caloriesBurnedUser.map(entry => ({
            ...entry,
            calories_burned: entry.calories_burned.toString()
        }));
        
        return formatted;
    }
}