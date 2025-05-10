import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar, uniqueIndex } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    user: varchar('user', { length: 256 }).notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    lastname: varchar('lastname', { length: 256 }).notNull(),
    password: text('password').notNull(),
    role: text('role').notNull(),
}, (table) => {
    return {
        userUnique: uniqueIndex('user_unique').on(table.user),
    };
});

export default usersTable;

export type User = InferSelectModel<typeof usersTable>;