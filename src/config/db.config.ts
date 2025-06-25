import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'nutridigitaldb',
  password: process.env.DB_PASSWORD || '123456',
  port: 5432,
  ssl: process.env.DB_SSL == "true" ? true : false,
  // Puedes ajustar el número de conexiones máximas:
  max: 5,
});

const db = drizzle(pool);

export default db;