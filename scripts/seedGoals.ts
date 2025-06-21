import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import micronutrientGoalsTable from '../src/nutrient-goals/nutrient-goals.entity';
import exerciseGoalsTable from '../src/exercise-goals/exercise-goals.entity';
import nutritionGoalsTable from '../src/nutrient-goals/nutrition-goals.entity';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  await db.insert(micronutrientGoalsTable).values([
    {
      id: 1,
      id_user: 1,
      saturated_fat: 1,
      polyunsaturated_fat: 1,
      monounsaturated_fat: 1,
      trans: 1,
      cholesterol: 1,
      sodium: 1,
      potassium: 1,
      fiber: 1,
      sugar: 1,
      vitamin_a: 1,
      vitamin_c: 1,
      calcium: 1,
      iron: 1,
    }
  ]);

  await db.insert(exerciseGoalsTable).values([
    {
      id_user: 1,
      calories_burned_goal: 1
    }
  ]);

  await db.insert(nutritionGoalsTable).values([
    {
      id: 1,
      id_user: 1,
      calories: 1,
      total_fat: 1,
      total_carbs: 1,
      protein: 1
    }
  ]);

  console.log('✅ Goals inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
