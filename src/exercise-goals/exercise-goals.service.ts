import db from '../config/db.config';
import exerciseGoalsTable from './exercise-goals.entity';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class ExerciseGoalsService {
  async updateExerciseGoals(user_id: number, exerciseGoalsDto: any): Promise<any> {
      const resp = await db
        .update(exerciseGoalsTable)
        .set({
          calories_burned_goal: exerciseGoalsDto.calories_burned_goal,
        })
        .where(eq(exerciseGoalsTable.id_user, user_id))
        .returning();
      return resp;
    }

  async getExerciseGoals(user_id: number): Promise<any> {
    const resp = await db
      .select()
      .from(exerciseGoalsTable)
      .where(eq(exerciseGoalsTable.id_user, user_id));
    return resp;
  }

  async addExerciseGoals(userId: number, exerciseGoals: any): Promise<any> {
		const resp = await db
			.insert(exerciseGoalsTable)
			.values({ ...exerciseGoals, id_user: userId })
			.returning();
		return resp;
	}
}