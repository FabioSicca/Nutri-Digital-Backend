import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar, uniqueIndex, integer } from 'drizzle-orm/pg-core';

export const foodTable = pgTable('food', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    brand: varchar('brand', { length: 256 }).notNull(),
    serving: varchar('serving', { length: 256 }).notNull(),
    calories: integer('calories').notNull(),
    href: varchar('href', { length: 256 }).notNull(),
    external_id: varchar('external_id', { length: 256 }).notNull(),
    searchTerm: varchar('searchTerm', { length: 256 }).notNull(),
    sodium: varchar('sodium', { length: 256 }).notNull(),
    total_fat: varchar('total_fat', { length: 256 }).notNull(),
    potassium: varchar('potassium', { length: 256 }).notNull(),
    saturated: varchar('saturated', { length: 256 }).notNull(),
    total_carbs: varchar('total_carbs', { length: 256 }).notNull(),
    polyunsaturated: varchar('polyunsaturated', { length: 256 }).notNull(),
    dietary_fiber: varchar('dietary_fiber', { length: 256 }).notNull(),
    monounsaturated: varchar('monounsaturated', { length: 256 }).notNull(),
    sugars: varchar('sugars', { length: 256 }).notNull(),
    trans: varchar('trans', { length: 256 }).notNull(),
    protein: varchar('protein', { length: 256 }).notNull(),
    cholesterol: varchar('cholesterol', { length: 256 }).notNull(),
    vitamin_a: varchar('vitamin_a', { length: 256 }).notNull(),
    calcium: varchar('calcium', { length: 256 }).notNull(),
    vitamin_c: varchar('vitamin_c', { length: 256 }).notNull(),
    iron: varchar('iron', { length: 256 }).notNull(),
}, (table) => {
    
});

export default foodTable;

export type Food = InferSelectModel<typeof foodTable>;