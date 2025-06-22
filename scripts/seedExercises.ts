import exerciseTypesTable from '../src/exercise/exercise.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seedExercises() {
  await db.insert(exerciseTypesTable).values([
    {
      id: 1,
      name: "correr",
    },
    {
      id: 2,
      name: "nadar",
    },
    {
      id: 3,
      name: "ciclismo",
    },
    {
      id: 4,
      name: "levantar pesas",
    },
    {
      id: 5,
      name: "yoga",
    },
    {
      id: 6,
      name: "pilates",
    },
    {
      id: 7,
      name: "boxeo",
    },
    {
      id: 8,
      name: "escalada",
    },
    {
      id: 9,
      name: "futbol",
    },
    {
      id: 10,
      name: "caminar",
    },
    {
      id: 11,
      name: "tenis",
    },
    {
      id: 12,
      name: "voley",
    },
    {      
      id: 13,
      name: "baloncesto",
    }
  ]);
  console.log('✅ Exercises inserted successfully.');
  await pool.end();
}

seedExercises().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});