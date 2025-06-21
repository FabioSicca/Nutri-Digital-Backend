import hidratationTable from '../src/hidratation/hidratation.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seedHidratation() {
  await db.execute(
    `ALTER SEQUENCE hidratate_id_seq RESTART WITH 1;`
  );

  await db.insert(hidratationTable).values([
  { id_user: 4, mililiters: 1000, date_consumed: new Date("2025-06-01") },
  { id_user: 4, mililiters: 1200, date_consumed: new Date("2025-06-01") },
  { id_user: 4, mililiters: 1800, date_consumed: new Date("2025-06-02") },
  { id_user: 4, mililiters: 300,  date_consumed: new Date("2025-06-02") },
  { id_user: 4, mililiters: 2100, date_consumed: new Date("2025-06-03") },
  { id_user: 4, mililiters: 1900, date_consumed: new Date("2025-06-04") },
  { id_user: 4, mililiters: 800,  date_consumed: new Date("2025-06-05") },
  { id_user: 4, mililiters: 1300, date_consumed: new Date("2025-06-05") },
  { id_user: 4, mililiters: 1000, date_consumed: new Date("2025-06-06") },
  { id_user: 4, mililiters: 1100, date_consumed: new Date("2025-06-06") },
  { id_user: 4, mililiters: 2200, date_consumed: new Date("2025-06-07") },
  { id_user: 4, mililiters: 1900, date_consumed: new Date("2025-06-08") },
  { id_user: 4, mililiters: 2100, date_consumed: new Date("2025-06-09") },
  { id_user: 4, mililiters: 900,  date_consumed: new Date("2025-06-10") },
  { id_user: 4, mililiters: 1100, date_consumed: new Date("2025-06-10") },
  { id_user: 4, mililiters: 2000, date_consumed: new Date("2025-06-11") },
  { id_user: 4, mililiters: 1800, date_consumed: new Date("2025-06-12") },
  { id_user: 4, mililiters: 1900, date_consumed: new Date("2025-06-13") },
  { id_user: 4, mililiters: 1000, date_consumed: new Date("2025-06-14") },
  { id_user: 4, mililiters: 1000, date_consumed: new Date("2025-06-14") },
  { id_user: 4, mililiters: 2100, date_consumed: new Date("2025-06-15") },
  { id_user: 4, mililiters: 1950, date_consumed: new Date("2025-06-16") },
  { id_user: 4, mililiters: 2200, date_consumed: new Date("2025-06-17") },
  { id_user: 4, mililiters: 800,  date_consumed: new Date("2025-06-18") },
  { id_user: 4, mililiters: 1200, date_consumed: new Date("2025-06-18") },
  { id_user: 4, mililiters: 1500, date_consumed: new Date("2025-06-19") },
  { id_user: 4, mililiters: 600,  date_consumed: new Date("2025-06-19") },
  { id_user: 4, mililiters: 1900, date_consumed: new Date("2025-06-20") },
  { id_user: 4, mililiters: 2100, date_consumed: new Date("2025-06-21") },
  { id_user: 4, mililiters: 1700, date_consumed: new Date("2025-06-22") },
  { id_user: 4, mililiters: 800,  date_consumed: new Date("2025-06-23") },
  { id_user: 4, mililiters: 1400, date_consumed: new Date("2025-06-23") },
  { id_user: 4, mililiters: 2000, date_consumed: new Date("2025-06-24") },
  { id_user: 4, mililiters: 1800, date_consumed: new Date("2025-06-25") },

  { id_user: 5, mililiters: 900,  date_consumed: new Date("2025-06-01") },
  { id_user: 5, mililiters: 1200, date_consumed: new Date("2025-06-01") },
  { id_user: 5, mililiters: 2000, date_consumed: new Date("2025-06-02") },
  { id_user: 5, mililiters: 1900, date_consumed: new Date("2025-06-03") },
  { id_user: 5, mililiters: 1800, date_consumed: new Date("2025-06-04") },
  { id_user: 5, mililiters: 1300, date_consumed: new Date("2025-06-05") },
  { id_user: 5, mililiters: 900,  date_consumed: new Date("2025-06-05") },
  { id_user: 5, mililiters: 2000, date_consumed: new Date("2025-06-06") },
  { id_user: 5, mililiters: 1500, date_consumed: new Date("2025-06-07") },
  { id_user: 5, mililiters: 600,  date_consumed: new Date("2025-06-07") },
  { id_user: 5, mililiters: 2100, date_consumed: new Date("2025-06-08") },
  { id_user: 5, mililiters: 1950, date_consumed: new Date("2025-06-09") },
  { id_user: 5, mililiters: 800,  date_consumed: new Date("2025-06-10") },
  { id_user: 5, mililiters: 1300, date_consumed: new Date("2025-06-10") },
  { id_user: 5, mililiters: 1000, date_consumed: new Date("2025-06-11") },
  { id_user: 5, mililiters: 1100, date_consumed: new Date("2025-06-11") },
  { id_user: 5, mililiters: 2200, date_consumed: new Date("2025-06-12") },
  { id_user: 5, mililiters: 1700, date_consumed: new Date("2025-06-13") },
  { id_user: 5, mililiters: 900,  date_consumed: new Date("2025-06-14") },
  { id_user: 5, mililiters: 1100, date_consumed: new Date("2025-06-14") },
  { id_user: 5, mililiters: 2000, date_consumed: new Date("2025-06-15") },
  { id_user: 5, mililiters: 2100, date_consumed: new Date("2025-06-16") },
  { id_user: 5, mililiters: 1800, date_consumed: new Date("2025-06-17") },
  { id_user: 5, mililiters: 1000, date_consumed: new Date("2025-06-18") },
  { id_user: 5, mililiters: 1100, date_consumed: new Date("2025-06-18") },
  { id_user: 5, mililiters: 1600, date_consumed: new Date("2025-06-19") },
  { id_user: 5, mililiters: 500,  date_consumed: new Date("2025-06-19") },
  { id_user: 5, mililiters: 2300, date_consumed: new Date("2025-06-20") },
  { id_user: 5, mililiters: 1800, date_consumed: new Date("2025-06-21") },
  { id_user: 5, mililiters: 1700, date_consumed: new Date("2025-06-22") },
  { id_user: 5, mililiters: 800,  date_consumed: new Date("2025-06-23") },
  { id_user: 5, mililiters: 1400, date_consumed: new Date("2025-06-23") },
  { id_user: 5, mililiters: 2000, date_consumed: new Date("2025-06-24") },
  { id_user: 5, mililiters: 1900, date_consumed: new Date("2025-06-25") },

  { id_user: 6, mililiters: 1000, date_consumed: new Date("2025-06-01") },
  { id_user: 6, mililiters: 1100, date_consumed: new Date("2025-06-01") },
  { id_user: 6, mililiters: 2000, date_consumed: new Date("2025-06-02") },
  { id_user: 6, mililiters: 1700, date_consumed: new Date("2025-06-03") },
  { id_user: 6, mililiters: 1900, date_consumed: new Date("2025-06-04") },
  { id_user: 6, mililiters: 1200, date_consumed: new Date("2025-06-05") },
  { id_user: 6, mililiters: 1000, date_consumed: new Date("2025-06-05") },
  { id_user: 6, mililiters: 900,  date_consumed: new Date("2025-06-06") },
  { id_user: 6, mililiters: 1300, date_consumed: new Date("2025-06-06") },
  { id_user: 6, mililiters: 2200, date_consumed: new Date("2025-06-07") },
  { id_user: 6, mililiters: 1500, date_consumed: new Date("2025-06-08") },
  { id_user: 6, mililiters: 1600, date_consumed: new Date("2025-06-09") },
  { id_user: 6, mililiters: 1900, date_consumed: new Date("2025-06-10") },
  { id_user: 6, mililiters: 2100, date_consumed: new Date("2025-06-11") },
  { id_user: 6, mililiters: 1000, date_consumed: new Date("2025-06-12") },
  { id_user: 6, mililiters: 1100, date_consumed: new Date("2025-06-12") },
  { id_user: 6, mililiters: 2000, date_consumed: new Date("2025-06-13") },
  { id_user: 6, mililiters: 1950, date_consumed: new Date("2025-06-14") },
  { id_user: 6, mililiters: 1800, date_consumed: new Date("2025-06-15") },
  { id_user: 6, mililiters: 1400, date_consumed: new Date("2025-06-16") },
  { id_user: 6, mililiters: 600,  date_consumed: new Date("2025-06-16") },
  { id_user: 6, mililiters: 2000, date_consumed: new Date("2025-06-17") },
  { id_user: 6, mililiters: 1900, date_consumed: new Date("2025-06-18") },
  { id_user: 6, mililiters: 900,  date_consumed: new Date("2025-06-19") },
  { id_user: 6, mililiters: 1200, date_consumed: new Date("2025-06-19") },
  { id_user: 6, mililiters: 2100, date_consumed: new Date("2025-06-20") },
  { id_user: 6, mililiters: 1600, date_consumed: new Date("2025-06-21") },
  { id_user: 6, mililiters: 1000, date_consumed: new Date("2025-06-22") },
  { id_user: 6, mililiters: 1000, date_consumed: new Date("2025-06-22") },
  { id_user: 6, mililiters: 1800, date_consumed: new Date("2025-06-23") },
  { id_user: 6, mililiters: 1400, date_consumed: new Date("2025-06-24") },
  { id_user: 6, mililiters: 600,  date_consumed: new Date("2025-06-24") },
  { id_user: 6, mililiters: 2000, date_consumed: new Date("2025-06-25") },
  
  ]);

  console.log('✅ Hidratation inserted successfully.');
  await pool.end();
}

seedHidratation().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
