import { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  serial,
  timestamp,
  integer,
  bigint,
  foreignKey,
  date
} from 'drizzle-orm/pg-core';

export const professionalTable = pgTable('professional', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    specialty: varchar('specialty', { length: 256 }).notNull(),
    type_of_food: varchar('type_of_food', { length: 256 }).notNull(),
    date_consumed: date('fecha', { mode: 'date' }).notNull(),
    points: integer('points').notNull()

  });
  
export default professionalTable;

export type Professional = InferSelectModel<typeof professionalTable>;