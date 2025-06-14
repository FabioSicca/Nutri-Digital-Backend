import { InferSelectModel } from 'drizzle-orm';
import { pgTable, varchar, serial, integer, date } from 'drizzle-orm/pg-core';
import professionalTable from './professional.entity';
import usersTable from '@/user/user.entity';

export const reviewsTable = pgTable('reviews', {
	id: serial('id').primaryKey().notNull(),
	user_id: integer('user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
	professional_id: integer('professional_id').notNull().references(() => professionalTable.id, { onDelete: 'cascade' }),
	score: integer('score').notNull(),
	comment: varchar('comment', { length: 256 }).notNull(),
	review_date: date('review_date', { mode: 'date' }).notNull(),
});

export default reviewsTable;

export type Reviews = InferSelectModel<typeof reviewsTable>;
