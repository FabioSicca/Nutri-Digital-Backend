import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import exerciseTypesTable from './exercise.entity';
import { eq, ilike, and } from 'drizzle-orm';
import exerciseDoneTable from './exercise-done.entity';
import { ExerciseDoneDto } from './exercise-done.dto';

@Injectable()
export class ExerciseService {

  // Retrieves exercise types from the database
  async getExerciseById(id: number): Promise<any> {
    const [exercise] = await db
      .select()
      .from(exerciseTypesTable)
      .where(eq(exerciseTypesTable.id, id));
    return exercise;
  }

  async getExercisesByName(name: string): Promise<any[]> {
  if (!name) {
    return await db.select().from(exerciseTypesTable);
  }
  return await db
    .select()
    .from(exerciseTypesTable)
    .where(ilike(exerciseTypesTable.name, `%${name.toLowerCase()}%`));
  }

  async addExerciseToDone(exerciseDoneInfo: ExerciseDoneDto): Promise<any> {
    const today = new Date();
    const dateOnly = new Date(today.toISOString());
    const exercise = await this.getExerciseById(exerciseDoneInfo.id_exercise);
    if (! exercise) {
      throw new Error('Exercise not found');
    }
    const [newExerciseDone] = await db
      .insert(exerciseDoneTable)
      .values({
        id_user: exerciseDoneInfo.id_user,
        id_exercise_type: exerciseDoneInfo.id_exercise,
        calories_burned: exerciseDoneInfo.calories_burned,
        date: dateOnly,
      })
      .returning();
      return newExerciseDone;
  }

  async getExercisesFromDay(userId: number, day: Date): Promise<any[]> {
    const exercises = await db
      .select()
      .from(exerciseDoneTable)
      .where(
        and(
        eq(exerciseDoneTable.id_user, userId),
        eq(exerciseDoneTable.date, day),
        )
      );
    return exercises;
  }

  async getAllExercises(): Promise<any[]> {
    return await db.select().from(exerciseTypesTable);
  }

}