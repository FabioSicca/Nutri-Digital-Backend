import { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';
import usersTable from '@/user/user.entity';

export const messagesTable = pgTable('messages', {
	id: serial('id').primaryKey().notNull(),
	sender_user_id: integer('sender_user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
	recipient_user_id: integer('recipient_user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
	text_content: varchar('text_content', { length: 256 }).notNull(),
});

export default messagesTable;

export type Messages = InferSelectModel<typeof messagesTable>;
