import { pgTable, serial, real, integer } from 'drizzle-orm/pg-core';
import usersTable from '@/user/user.entity';
import { InferSelectModel } from 'drizzle-orm';

export const nutritionGoalsTable = pgTable('nutrition_goals', {
	id: serial('id').primaryKey().notNull(),
	id_user: integer('id_user')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	calories: real('calories'),
	total_fat: real('total_fat'),
	total_carbs: real('total_carbs'),
	protein: real('protein'),
});

export default nutritionGoalsTable;

export type nutritionGoals = InferSelectModel<typeof nutritionGoalsTable>;
