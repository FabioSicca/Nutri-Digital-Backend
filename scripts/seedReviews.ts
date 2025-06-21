import reviewsTable from '../src/professional/reviews.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seedReviews() {
  await db.execute(
    `ALTER SEQUENCE reviews_id_seq RESTART WITH 1;`
  );

  await db.insert(reviewsTable).values([
    {
      user_id: 4,
      professional_id: 1,
      score: 5,
      comment: 'Excelente servicio, muy profesional y atento.',
      review_date: new Date('2025-06-02'),
    },
    {
      user_id: 5,
      professional_id: 2,
      score: 4,
      comment: 'Buen servicio, aunque podría mejorar en algunos aspectos.',
      review_date: new Date('2025-06-04'),
    },
    {
      user_id: 6,
      professional_id: 2,
      score: 3,
      comment: 'Servicio aceptable, pero no cumplió con mis expectativas.',
      review_date: new Date('2025-06-06'),
    },
    {
      user_id: 5,
      professional_id: 3,
      score: 2,
      comment: 'No estoy satisfecho con el servicio recibido.',
      review_date: new Date('2025-06-09'),
    }
  ]);

  console.log('✅ Reviews done inserted successfully.');
  await pool.end();
}

seedReviews().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});