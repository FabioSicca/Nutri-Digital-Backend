import { InferSelectModel } from 'drizzle-orm';
import { pgTable, varchar, serial } from 'drizzle-orm/pg-core';

export const professionalTable = pgTable('professional', {
	id: serial('id').primaryKey().notNull(),
	name: varchar('name', { length: 256 }).notNull(),
	specialty: varchar('specialty', { length: 256 }).notNull(),
});

export default professionalTable;

export type Professional = InferSelectModel<typeof professionalTable>;
