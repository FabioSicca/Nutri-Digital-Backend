import foodTable from '../food/food.entity';
import usersTable from '../user/user.entity';
import { InferSelectModel } from 'drizzle-orm';
import {
	pgTable,
	varchar,
	serial,
	timestamp,
	integer,
	bigint,
	foreignKey,
	date,
} from 'drizzle-orm/pg-core';

export const consumedTable = pgTable('consumed', {
	id: serial('id').primaryKey().notNull(),
	portion: varchar('portion', { length: 256 }).notNull(),
	unit: varchar('unit', { length: 256 }).notNull(),
	type_of_food: varchar('type_of_food', { length: 256 }).notNull(),
	date_consumed: date('fecha', { mode: 'date' }).notNull(),
	id_user: integer('id_user')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	id_food: bigint('id_food', { mode: 'number' })
		.notNull()
		.references(() => foodTable.id, { onDelete: 'cascade' }),
});

export default consumedTable;

export type Consumed = InferSelectModel<typeof consumedTable>;
