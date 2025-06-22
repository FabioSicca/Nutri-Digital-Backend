import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../src/user/user.entity';
import { Pool } from 'pg';
import 'dotenv/config';
import exerciseTypesTable from '../src/exercise/exercise.entity';
import exerciseDoneTable from '../src/exercise/exercise-done.entity';
import foodTable from '../src/food/food.entity';
import micronutrientGoalsTable from '../src/nutrient-goals/nutrient-goals.entity';
import exerciseGoalsTable from '../src/exercise-goals/exercise-goals.entity';
import nutritionGoalsTable from '../src/nutrient-goals/nutrition-goals.entity';
import professionalTable from '../src/professional/professional.entity';
import consumedTable from '../src/consumed/consumed.entity';
import hidratationTable from '../src/hidratation/hidratation.entity';
import messagesTable from '../src/messages/messages.entity';
import patientTable from '../src/request-professional/patient.entity';
import placeTable from '../src/place/place.entity';
import planningTable from '../src/planning/planning.entity';
import requestTable from '../src/request-professional/request.entity';
import reviewsTable from '../src/professional/reviews.entity';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  console.log('Purgando tablas');

  await db.delete(consumedTable)
  await db.delete(exerciseDoneTable)
  await db.delete(exerciseGoalsTable)
  await db.delete(exerciseTypesTable)
  await db.delete(foodTable)
  await db.delete(hidratationTable)
  await db.delete(messagesTable)
  await db.delete(micronutrientGoalsTable)
  await db.delete(nutritionGoalsTable)
  await db.delete(patientTable)
  await db.delete(placeTable)
  await db.delete(planningTable)
  await db.delete(professionalTable)
  await db.delete(requestTable)
  await db.delete(reviewsTable)
  await db.delete(usersTable)

  console.log('✅ Tablas purgadas con exito.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error:', err);
  pool.end();
});
