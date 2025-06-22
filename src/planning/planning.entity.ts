import foodTable from '../food/food.entity';
import usersTable from '../user/user.entity';
import { InferSelectModel } from 'drizzle-orm';
import {
	pgTable,
	varchar,
	serial,
	integer,
	bigint,
	date,
} from 'drizzle-orm/pg-core';

export const planningTable = pgTable('planning', {
	id: serial('id').primaryKey().notNull(),
	portion: varchar('portion', { length: 256 }).notNull(),
	name_food: varchar('name_food', { length: 256 }).notNull(),
    day: varchar('day', { length: 256 }).notNull(),
	date_planning: date('fecha', { mode: 'date' }).notNull(),
	id_user: integer('id_user')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	id_food: bigint('id_food', { mode: 'number' })
		.notNull()
		.references(() => foodTable.id, { onDelete: 'cascade' }),
});

export default planningTable;

export type Planning = InferSelectModel<typeof planningTable>;
