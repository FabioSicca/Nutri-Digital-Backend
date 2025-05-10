import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar, uniqueIndex } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    user: varchar('user', { length: 256 }).notNull(), // Agrega notNull para evitar valores nulos
    name: varchar('name', { length: 256 }).notNull(),
    lastname: varchar('lastname', { length: 256 }).notNull(),
    password: text('password').notNull(),
    role: text('role').notNull(),
}, (table) => {
    return {
        userUnique: uniqueIndex('user_unique').on(table.user), // Define la restricción UNIQUE
    };
});

export default usersTable;

export type User = InferSelectModel<typeof usersTable>;