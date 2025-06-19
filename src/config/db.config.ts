import { drizzle } from 'drizzle-orm/node-postgres';

import { Client } from 'pg';

const client = new Client({
	user: process.env.DB_USER || 'postgres',
	host: process.env.DB_HOST || 'localhost',
	database: process.env.DB_DATABASE || 'nutridigitaldb',
	password: process.env.DB_PASSWORD || '123456',
	port: 5432,
	ssl: true,
});

if (process.env.NODE_ENV !== 'test') {
	client.connect();
}

const db = drizzle(client);

export default db;
