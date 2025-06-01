import { pgTable, real, integer, serial, date } from 'drizzle-orm/pg-core';
import { InferSelectModel } from 'drizzle-orm';
import usersTable from '@/user/user.entity';
import exerciseTypesTable from './exercise.entity';

// Stores the exercises done by the user
export const exerciseDoneTable = pgTable('exercise_done', {
  id: serial('id').primaryKey().notNull(),
  id_user: integer('id_user')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  id_exercise_type: integer('id_exercise_type')
    .notNull()
    .references(() => exerciseTypesTable.id, { onDelete: 'cascade' }),
  calories_burned: real('calories_burned').notNull(),
  date: date('date', { mode: 'date' }).notNull(),
});

export default exerciseDoneTable;

export type ExerciseDone = InferSelectModel<typeof exerciseDoneTable>;