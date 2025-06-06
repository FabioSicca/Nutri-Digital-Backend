import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq, sql, lt, gte, and } from 'drizzle-orm';
import micronutrientGoalsTable from '../nutrient-goals/nutrient-goals.entity';
import nutritionGoalsTable from '../nutrient-goals/nutrition-goals.entity';
import exerciseDoneTable from '../exercise/exercise-done.entity';
import hidratationTable from '../hidratation/hidratation.entity';
import { ReportType } from './report.types';
import { subDays } from 'date-fns';
import consumedTable from '../consumed/consumed.entity';
import foodTable from '@/food/food.entity';

@Injectable()
export class ReportService {
      

    async getReport(id_user: number): Promise<any> {
        const thirtyDaysAgo = subDays(new Date(), 30);
    
        /*const consumedUser = await db
            .select()
            .from(consumedTable)
            .where(
                and(
                    eq(consumedTable.id_user, id_user),
                    gte(consumedTable.date_consumed, thirtyDaysAgo)
                )
            );
        //aca tengo todo lo que consumio el usuario en los ultimos 30 dias
        //en cada registtro tengo id_user y id_food
        
        if (consumedUser.length === 0) throw new Error('No consumed founded');*/

        const waterConsumed = await db
                    .select({
                        date: hidratationTable.date_consumed,
                        mililiters: sql<number>`SUM(${hidratationTable.mililiters})`,
                    })
                    .from(hidratationTable)
                    .where(
                        and(
                            eq(hidratationTable.id_user, id_user),
                            gte(hidratationTable.date_consumed, thirtyDaysAgo)
                        )
                    )
                    .groupBy(hidratationTable.date_consumed);

        //aca tengo el agua que consumio en los ultimos 3 dias, y ahora lo quiero agrupar por
        //fecha y acumular el campo mililiters, por dia, me tiene que aparecer la suma
        /*const caloriesBurnedUser = await db
                            .select()
                            .from(exerciseDoneTable)
                            .where(
                                and(
                                    eq(exerciseDoneTable.id_user, id_user),
                                    gte(exerciseDoneTable.date, thirtyDaysAgo)
                                )
                            );*/


        //se debe mapear waterConsumed(se van sumando la cantidad de agua, de todos los registros)
        //y con lo de food, se debe hacer mapeo final, sumando los campos(sea fibra, calorias, etc)        
        //idem con los ejercicios realizados(se suma las calorias quemadas)
        /*console.log('CANTIDAD DE AGUA CONSUMIDA', waterConsumed.length);

        const foodConsumed = await db
                    .select()
                    .from(consumedTable)
                    .innerJoin(
                        foodTable,
                        eq(foodTable.id, consumedTable.id_food),
                    )
                    .where(
                        eq(consumedTable.id_user, id_user)
                    )
  
        if (foodConsumed.length === 0) throw new Error('No food founded');*/

        return waterConsumed;
    }
  
}