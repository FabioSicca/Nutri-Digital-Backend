import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../src/entities/user.entity';
import { Pool } from 'pg';
import 'dotenv/config';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  console.log('🌱 Seeding database...');

  await db.insert(usersTable).values([
    {
      name: 'Santiago',
      email: 'santi@fiuba.com',
      password: '1234',
      role: 'paciente',
    },
    {
      name: 'Alex',
      email: 'alex@fiuba.com',
      password: '1234',
      role: 'paciente',
    },
  ]);

  console.log('✅ Users inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
