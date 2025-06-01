import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq, sql, lt, gte, and } from 'drizzle-orm';
import micronutrientGoalsTable from '../nutrient-goals/nutrient-goals.entity';
import nutritionGoalsTable from '../nutrient-goals/nutrition-goals.entity';
import exerciseDoneTable from '../exercise/exercise-done.entity';
import hidratationTable from '../hidratation/hidratation.entity';
import { ReportType } from './report.types';
import { subDays } from 'date-fns';

@Injectable()
export class ReportService {

    private readonly typeConfig: Record<ReportType, {
        table: any;
        valueColumn: any;
        dateColumn: any;
      }> = {
        calories: {
          table: nutritionGoalsTable,
          valueColumn: nutritionGoalsTable.calories,
          dateColumn: nutritionGoalsTable.date_consumed,
        },
        total_carbs: {
          table: nutritionGoalsTable,
          valueColumn: nutritionGoalsTable.total_carbs,
          dateColumn: nutritionGoalsTable.date_consumed,
        },
        total_fat: {
          table: nutritionGoalsTable,
          valueColumn: nutritionGoalsTable.total_fat,
          dateColumn: nutritionGoalsTable.date_consumed,
        },
        protein: {
          table: nutritionGoalsTable,
          valueColumn: nutritionGoalsTable.protein,
          dateColumn: nutritionGoalsTable.date_consumed,
        },
      
        saturated_fat: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.saturated_fat,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        polyunsaturated_fat: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.polyunsaturated_fat,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        monounsaturated_fat: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.monounsaturated_fat,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        trans: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.trans,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        cholesterol: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.cholesterol,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        sodium: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.sodium,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        potassium: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.potassium,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        fiber: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.fiber,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        sugar: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.sugar,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        vitamin_a: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.vitamin_a,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        vitamin_c: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.vitamin_c,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        calcium: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.calcium,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
        iron: {
          table: micronutrientGoalsTable,
          valueColumn: micronutrientGoalsTable.iron,
          dateColumn: micronutrientGoalsTable.date_consumed,
        },
      
        calories_burned: {
          table: exerciseDoneTable,
          valueColumn: exerciseDoneTable.calories_burned,
          dateColumn: exerciseDoneTable.date,
        },
      
        mililiters: {
          table: hidratationTable,
          valueColumn: hidratationTable.mililiters,
          dateColumn: hidratationTable.date_consumed,
        },
    };
      

    async getReport(id_user: number, type: ReportType): Promise<
      { quantity_consumed: number; date_consumed: Date }[]
    > {
    const config = this.typeConfig[type];
  
    const { table, valueColumn, dateColumn } = config;

    const thirtyDaysAgo = subDays(new Date(), 30);
  
    const results = await db
        .select({
            quantity_consumed: valueColumn,
            date_consumed: dateColumn,
        })
        .from(table)
        .where(
          and(
            eq(table.id_user, id_user),
            gte(dateColumn, thirtyDaysAgo)
          )
        );
  
      return results;
    }

    isValidReportType(type: string): type is ReportType {
        const validTypes: ReportType[] = [
            'calories', 'total_carbs', 'total_fat', 'protein',
            'trans', 'monounsaturated_fat', 'polyunsaturated_fat', 'saturated_fat',
            'cholesterol', 'sodium', 'potassium', 'fiber', 'sugar',
            'vitamin_a', 'vitamin_c', 'calcium', 'iron',
            'calories_burned', 'mililiters',
        ];
        return validTypes.includes(type as ReportType);
    }
  
}