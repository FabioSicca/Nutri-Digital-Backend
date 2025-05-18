import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, date, integer } from 'drizzle-orm/pg-core';
import usersTable from '@/user/user.entity';

export const hidratationTable = pgTable('hidratate', {
	id: serial('id').primaryKey().notNull(),
	id_user: integer('id_user')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	mililiters: integer('mililiters').notNull(),
	date_consumed: date('fecha', { mode: 'date' }).notNull(),
});

export default hidratationTable;

export type Hidratation = InferSelectModel<typeof hidratationTable>;
