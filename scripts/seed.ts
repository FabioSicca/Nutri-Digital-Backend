import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../src/user/user.entity';
import { Pool } from 'pg';
import 'dotenv/config';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  console.log('🌱 Seeding database...');

  await db.execute(
    `ALTER SEQUENCE users_id_seq RESTART WITH 1;`
  );

  const res = await db.insert(usersTable).values([
    // MEDICOS 
    {
      user: 'eze',
      name: 'Ezequiel',
      lastname: 'Ayuda',
      password: '1234',
      role: 'medic',
    },
    {
      user: 'franz',
      name: 'Franz',
      lastname: 'Perez',
      password: '1234',
      role: 'medic',
    },
    // USUARIOS
    {
      user: 'santi',
      name: 'Santiago',
      lastname: 'Scooby',
      password: '1234',
      role: 'usuario',
    },
    {
      user: 'alex',
      name: 'Alex',
      lastname: 'Gonzalez',
      password: '1234',
      role: 'usuario',
    },
    {
      user: 'fabio',
      name: 'Fabio',
      lastname: 'Rodriguez',
      password: '1234',
      role: 'usuario',
    },
    {
      user: 'ian',
      name: 'Ian',
      lastname: 'Romero',
      password: '1234',
      role: 'usuario',
    },
  ]);

  console.log('✅ Users inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
