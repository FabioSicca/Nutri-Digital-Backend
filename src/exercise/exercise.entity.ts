import { pgTable, real, integer, serial, varchar } from 'drizzle-orm/pg-core';
import { InferSelectModel } from 'drizzle-orm';

export const exerciseTypesTable = pgTable('exercise_types', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 255}).notNull(),
});

export default exerciseTypesTable;

export type ExerciseType = InferSelectModel<typeof exerciseTypesTable>;