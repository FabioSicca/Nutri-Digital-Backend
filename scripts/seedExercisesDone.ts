import exerciseDoneTable from '../src/exercise/exercise-done.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seedExercisesDone() {
  await db.insert(exerciseDoneTable).values([
    {
      id: 1,
      id_user: 4,
      id_exercise_type: 1,
      calories_burned: 300,
      date: new Date('2025-06-02'),
    },
    {
      id: 2,
      id_user: 4,
      id_exercise_type: 2,
      calories_burned: 250,
      date: new Date('2025-06-04'),
    },
    {
      id: 3,
      id_user: 4,
      id_exercise_type: 3,
      calories_burned: 400,
      date: new Date('2025-06-06'),
    },
    {
      id: 4,
      id_user: 4,
      id_exercise_type: 4,
      calories_burned: 350,
      date: new Date('2025-06-09'),
    },
    {
      id: 5,
      id_user: 4,
      id_exercise_type: 10,
      calories_burned: 200,
      date: new Date('2025-06-10'),
    },
    {
      id: 6,
      id_user: 4,
      id_exercise_type: 9,
      calories_burned: 150,
      date: new Date('2025-06-12'),
    },
    {
      id: 7,
      id_user: 4,
      id_exercise_type: 10,
      calories_burned: 180,
      date: new Date('2025-06-14'),
    },
    {
      id: 8,
      id_user: 4,
      id_exercise_type: 11,
      calories_burned: 220,
      date: new Date('2025-06-16'),
    },
    {
      id: 9,
      id_user: 4,
      id_exercise_type: 9,
      calories_burned: 270,
      date: new Date('2025-06-18'),
    },
    {
      id: 10,
      id_user: 4,
      id_exercise_type: 1,
      calories_burned: 320,
      date: new Date('2025-06-20'),
    },
    {
      id: 11,
      id_user: 4,
      id_exercise_type: 1,
      calories_burned: 300,
      date: new Date('2025-06-23'),
    },
    {
      id: 12,
      id_user: 4,
      id_exercise_type: 2,
      calories_burned: 250,
      date: new Date('2025-06-25'),
    },
    {
      id: 13,
      id_user: 5,
      id_exercise_type: 3,
      calories_burned: 400,
      date: new Date('2025-06-01'),
    },
    {
      id: 14,
      id_user: 5,
      id_exercise_type: 4,
      calories_burned: 350,
      date: new Date('2025-06-03'),
    },
    {
      id: 15,
      id_user: 5,
      id_exercise_type: 10,
      calories_burned: 200,
      date: new Date('2025-06-05'),
    },
    {
      id: 16,
      id_user: 5,
      id_exercise_type: 9,
      calories_burned: 150,
      date: new Date('2025-06-07'),
    },
    {
      id: 17,
      id_user: 5,
      id_exercise_type: 10,
      calories_burned: 180,
      date: new Date('2025-06-08'),
    },
    {
      id: 18,
      id_user: 5,
      id_exercise_type: 11,
      calories_burned: 220,
      date: new Date('2025-06-10'),
    },
    {
      id: 19,
      id_user: 5,
      id_exercise_type: 9,
      calories_burned: 270,
      date: new Date('2025-06-12'),
    },
    {
      id: 20,
      id_user: 5,
      id_exercise_type: 1,
      calories_burned: 320,
      date: new Date('2025-06-14'),
    },
    {
      id: 21,
      id_user: 5,
      id_exercise_type: 1,
      calories_burned: 300,
      date: new Date('2025-06-16'),
    },
    {
      id: 22,
      id_user: 5,
      id_exercise_type: 2,
      calories_burned: 250,
      date: new Date('2025-06-18'),
    },
    {
      id: 23,
      id_user: 5,
      id_exercise_type: 3,
      calories_burned: 400,
      date: new Date('2025-06-20'),
    },
    {
      id: 24,
      id_user: 5,
      id_exercise_type: 4,
      calories_burned: 350,
      date: new Date('2025-06-22'),
    },
    {
      id: 25,
      id_user: 5,
      id_exercise_type: 10,
      calories_burned: 200,
      date: new Date('2025-06-24'),
    },
    {
      id: 26,
      id_user: 5,
      id_exercise_type: 9,
      calories_burned: 150,
      date: new Date('2025-06-25'),
    },
    {
      id: 27,
      id_user: 6,
      id_exercise_type: 1,
      calories_burned: 300,
      date: new Date('2025-06-02'),
    },
    {
      id: 28,
      id_user: 6,
      id_exercise_type: 2,
      calories_burned: 250,
      date: new Date('2025-06-04'),
    },
    {
      id: 29,
      id_user: 6,
      id_exercise_type: 3,
      calories_burned: 400,
      date: new Date('2025-06-06'),
    },
    {
      id: 30,
      id_user: 6,
      id_exercise_type: 4,
      calories_burned: 350,
      date: new Date('2025-06-09'),
    },
    {
      id: 31,
      id_user: 6,
      id_exercise_type: 10,
      calories_burned: 200,
      date: new Date('2025-06-10'),
    },
    {
      id: 32,
      id_user: 6,
      id_exercise_type: 9,
      calories_burned: 150,
      date: new Date('2025-06-12'),
    },
    {
      id: 33,
      id_user: 6,
      id_exercise_type: 10,
      calories_burned: 180,
      date: new Date('2025-06-14'),
    },
    {
      id: 34,
      id_user: 6,
      id_exercise_type: 11,
      calories_burned: 220,
      date: new Date('2025-06-16'),
    },
    {
      id: 35,
      id_user: 6,
      id_exercise_type: 9,
      calories_burned: 270,
      date: new Date('2025-06-18'),
    },
    {
      id: 36,
      id_user: 6,
      id_exercise_type: 1,
      calories_burned: 320,
      date: new Date('2025-06-20'),
    },
    {
      id: 37,
      id_user: 6,
      id_exercise_type: 1,
      calories_burned: 300,
      date: new Date('2025-06-23'),
    },
    {
      id: 38,
      id_user: 6,
      id_exercise_type: 13,
      calories_burned: 250,
      date: new Date('2025-06-25'),
    },
  ]);
  console.log('✅ Exercises done inserted successfully.');
  await pool.end();
}

seedExercisesDone().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});