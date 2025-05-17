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
import professionalTable from './professional.entity';

export const reviewTable = pgTable('review', {
    id: serial('id').primaryKey().notNull(),
    score: integer('score').notNull(),
    comment: varchar('comment', { length: 256 }).notNull(),
    date_review: date('date_review', { mode: 'date' }).notNull(),
    id_professional: integer('id_professional')
      .notNull()
      .references(() => professionalTable.id, { onDelete: 'cascade' }),
  });
  
export default reviewTable;

export type Review = InferSelectModel<typeof reviewTable>;