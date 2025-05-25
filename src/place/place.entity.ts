import { InferSelectModel } from 'drizzle-orm';
import { pgTable, varchar, serial } from 'drizzle-orm/pg-core';

export const placeTable = pgTable('place', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    direction: varchar('direction', { length: 256 }).notNull(),
    category: varchar('category', { length: 256 }).notNull(),
    href: varchar('href', { length: 256 }).notNull(),
});

export default placeTable;

export type Place = InferSelectModel<typeof placeTable>;
