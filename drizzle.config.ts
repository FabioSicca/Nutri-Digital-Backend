import type { Config } from 'drizzle-kit';

export default {
	schema: ['./src/*/*.entity.ts', './src/*/*/*.entity.ts'],
	out: './migrations',
	dialect: 'postgresql',
	dbCredentials: {
		user: 'postgres',
		host: 'localhost',
		database: 'nutridigitaldb',
		password: '123456',
		port: 5432,
		ssl: false,
	},
	verbose: true,
	strict: true,
} satisfies Config;