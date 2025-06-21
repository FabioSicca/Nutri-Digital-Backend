import type { Config } from 'drizzle-kit';

export default {
	schema: ['./src/*/*.entity.ts', './src/*/*/*.entity.ts'],
	out: './migrations',
	dialect: 'postgresql',
	dbCredentials: {
		user: process.env.DB_USER || 'postgres',
		host: process.env.DB_HOST || 'localhost',
		database: process.env.DB_DATABASE || 'nutridigitaldb',
		password: process.env.DB_PASSWORD || '123456',
		port: 5432,
		ssl: process.env.DB_SSL == "true" ? true : false,
	},
	verbose: true,
	strict: true,
} satisfies Config;