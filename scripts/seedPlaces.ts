import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import placeTable from '../src/place/place.entity';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  await db.execute(
    `ALTER SEQUENCE place_id_seq RESTART WITH 1;`
  );

  await db.insert(placeTable).values([
    {
      name: "Naturaleza Sabia",
      direction: "Bolívar 1155, C1066 CABA",
      category: "Dietética",
      href: "https://maps.app.goo.gl/QjeFfKQHd6eqwExg9"
    },
    {
      name: "Mercado de San Telmo",
      direction: "Bolívar 970, C1066 CABA",
      category: "Mercado / Verdulería",
      href: "https://maps.app.goo.gl/HVG2NdyUXVW5JNaZ7"
    },
    {
      name: "Café Rivas",
      direction: "Estados Unidos 302, C1101 CABA",
      category: "Restaurante",
      href: "https://maps.app.goo.gl/4EY5kfjMpStqzi4w6"
    },
    {
      name: "Verdulería La Estrella",
      direction: "Chacabuco 960, C1069 CABA",
      category: "Verdulería",
      href: "https://maps.app.goo.gl/Xnkk1vMSPtghmRPv7"
    },
    {
      name: "Bio Mercado Natural",
      direction: "Carlos Calvo 738, C1102 CABA",
      category: "Mercado natural",
      href: "https://maps.app.goo.gl/VVqgiF8FwzduJwW19"
    }
  ]);

  console.log('✅ Places inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
