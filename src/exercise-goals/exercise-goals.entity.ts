import { pgTable, real, integer, date } from 'drizzle-orm/pg-core';
import usersTable from '@/user/user.entity';
import { InferSelectModel } from 'drizzle-orm';

export const exerciseGoalsTable = pgTable('exercise_goals', {
  id_user: integer('id_user')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  calories_burned_goal: real('calories_burned_goal').notNull()
});

export default exerciseGoalsTable;

export type ExerciseGoal = InferSelectModel<typeof exerciseGoalsTable>;