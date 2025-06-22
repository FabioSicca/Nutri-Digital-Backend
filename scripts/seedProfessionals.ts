import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import professionalTable from '../src/professional/professional.entity';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  await db.insert(professionalTable).values([
    {
      id: 1,
      name: 'Ezequiel Diaz',
      specialty: 'Nutricionista',
    },
    {
      id: 2,
      name: 'Franz Perez',
      specialty: 'Nutricionista',
    },
    {
      id: 3,
      name: 'Alex Gonzalez',
      specialty: 'Nutricionista',
    }
  ]);

  console.log('✅ Professional inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
