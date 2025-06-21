import { InferSelectModel } from 'drizzle-orm';
import { pgTable, varchar, serial } from 'drizzle-orm/pg-core';
import usersTable from '../user/user.entity';

export const professionalTable = pgTable('professional', {
	id: serial('id').primaryKey().notNull()
        .references(() => usersTable.id),
	name: varchar('name', { length: 256 }).notNull(),
	specialty: varchar('specialty', { length: 256 }).notNull(),
});

export default professionalTable;

export type Professional = InferSelectModel<typeof professionalTable>;
