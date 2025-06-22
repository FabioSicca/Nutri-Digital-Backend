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

  //await db.execute(
  //  `ALTER SEQUENCE micronutrient_goals_id_seq RESTART WITH 1;`
  //);
  //await db.execute(
  //  `ALTER SEQUENCE nutrition_goals_id_seq RESTART WITH 1;`
  //);

  for (let i = 1; i <= 6; i++) {
    await db.insert(micronutrientGoalsTable).values([
      {
        id_user: i,
        saturated_fat: 20,           // gramos
        polyunsaturated_fat: 17,     // gramos
        monounsaturated_fat: 33,     // gramos
        trans: 1,                    // gramos (idealmente 0)
        cholesterol: 300,            // miligramos
        sodium: 2300,                // miligramos (límite máximo recomendado)
        potassium: 4700,             // miligramos
        fiber: 28,                   // gramos
        sugar: 36,                   // gramos (máximo sugerido, depende de sexo)
        vitamin_a: 100,              // microgramos (RAE)
        vitamin_c: 100,               // miligramos
        calcium: 100,               // miligramos
        iron: 100                    // miligramos (mujeres), 8 (hombres)
      }
    ]);

    await db.insert(exerciseGoalsTable).values([
      {
        id_user: i,
        calories_burned_goal: 500
      }
    ]);

    await db.insert(nutritionGoalsTable).values([
      {
        id_user: i,
        calories: 2000,      // kcal por día
        total_fat: 70,       // gramos (~31% de las calorías)
        total_carbs: 275,    // gramos (~55%)
        protein: 75          // gramos (~15%)
      }
    ]);
  }

  console.log('✅ Goals inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
