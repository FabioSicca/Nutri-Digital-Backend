import professionalTable from '@/professional/professional.entity';
import usersTable from '@/user/user.entity';
import { InferSelectModel } from 'drizzle-orm';
import {
    pgTable,
    varchar,
    serial,
    integer,
    bigint,
} from 'drizzle-orm/pg-core';

export const requestTable = pgTable('request', {
    id: serial('id').primaryKey().notNull(),
    id_user: integer('id_user')
        .notNull()
        .references(() => usersTable.id, { onDelete: 'cascade' }),
    id_professional: bigint('id_professional', { mode: 'number' })
        .notNull()
        .references(() => professionalTable.id, { onDelete: 'cascade' }),
    state: varchar('state', { length: 256 }).notNull(),
});

export default requestTable;

export type Request = InferSelectModel<typeof requestTable>;
