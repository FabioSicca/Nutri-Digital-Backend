import { pgTable, serial, real, integer } from 'drizzle-orm/pg-core';
import usersTable from '@/user/user.entity';
import { InferSelectModel } from 'drizzle-orm';

export const micronutrientGoalsTable = pgTable('micronutrient_goals', {
	id: serial('id').primaryKey().notNull(),
	id_user: integer('id_user')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	saturated_fat: real('saturated_fat'), // gramos por día
	polyunsaturated_fat: real('polyunsaturated_fat'),
	monounsaturated_fat: real('monounsaturated_fat'),
	trans: real('trans'),
	cholesterol: real('cholesterol'), // mg por día
	sodium: real('sodium'), // mg por día
	potassium: real('potassium'), // mg por día
	fiber: real('fiber'), // g por día
	sugar: real('sugar'), // g por día
	vitamin_a: real('vitamin_a'), // µg por día
	vitamin_c: real('vitamin_c'), // mg por día
	calcium: real('calcium'), // mg por día
	iron: real('iron'), // mg por día
});

export default micronutrientGoalsTable;

export type micronutrientGoals = InferSelectModel<
	typeof micronutrientGoalsTable
>;
