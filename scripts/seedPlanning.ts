import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import planningTable from '../src/planning/planning.entity';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seed() {
  await db.execute(
    `ALTER SEQUENCE planning_id_seq RESTART WITH 1;`
  );

  await db.insert(planningTable).values([
    // Usuario 4
    { portion: "1", name_food: "Pan integral (2 rebanadas)", day: "Lunes", date_planning: new Date(), id_user: 4, id_food: 11 },
    { portion: "2", name_food: "Pollo a la plancha (150 g)", day: "Lunes", date_planning: new Date(), id_user: 4, id_food: 10 },
    { portion: "3", name_food: "Sopa de verduras (300 ml)", day: "Lunes", date_planning: new Date(), id_user: 4, id_food: 18 },

    { portion: "1", name_food: "Manzana (200 g)", day: "Martes", date_planning: new Date(), id_user: 4, id_food: 1 },
    { portion: "2", name_food: "Tarta de verduras (1 porción)", day: "Martes", date_planning: new Date(), id_user: 4, id_food: 21 },
    { portion: "3", name_food: "Pizza muzzarella (1 porción)", day: "Martes", date_planning: new Date(), id_user: 4, id_food: 20 },

    { portion: "1", name_food: "Yogur descremado (200 g)", day: "Miércoles", date_planning: new Date(), id_user: 4, id_food: 9 },
    { portion: "2", name_food: "Ensalada mixta (300 g)", day: "Miércoles", date_planning: new Date(), id_user: 4, id_food: 15 },
    { portion: "3", name_food: "Arroz con atún (250 g)", day: "Miércoles", date_planning: new Date(), id_user: 4, id_food: 23 },

    { portion: "1", name_food: "Barrita de cereal (1 unidad)", day: "Jueves", date_planning: new Date(), id_user: 4, id_food: 16 },
    { portion: "2", name_food: "Wok de vegetales con tofu", day: "Jueves", date_planning: new Date(), id_user: 4, id_food: 27 },
    { portion: "3", name_food: "Fideos con salsa boloñesa", day: "Jueves", date_planning: new Date(), id_user: 4, id_food: 25 },

    { portion: "1", name_food: "Tostadas con mermelada (2 unidades)", day: "Viernes", date_planning: new Date(), id_user: 4, id_food: 14 },
    { portion: "2", name_food: "Milanesa con puré (1 porción)", day: "Viernes", date_planning: new Date(), id_user: 4, id_food: 24 },
    { portion: "3", name_food: "Paella de mariscos (1 plato)", day: "Viernes", date_planning: new Date(), id_user: 4, id_food: 26 },

    { portion: "1", name_food: "Smoothie de frutas (250 ml)", day: "Sábado", date_planning: new Date(), id_user: 4, id_food: 22 },
    { portion: "2", name_food: "Hamburguesa (250 g)", day: "Sábado", date_planning: new Date(), id_user: 4, id_food: 8 },
    { portion: "3", name_food: "Bife con ensalada (1 porción)", day: "Sábado", date_planning: new Date(), id_user: 4, id_food: 28 },

    { portion: "1", name_food: "Café (200 ml)", day: "Domingo", date_planning: new Date(), id_user: 4, id_food: 3 },
    { portion: "2", name_food: "Guiso de lentejas (250 g)", day: "Domingo", date_planning: new Date(), id_user: 4, id_food: 19 },
    { portion: "3", name_food: "Pollo a la plancha (150 g)", day: "Domingo", date_planning: new Date(), id_user: 4, id_food: 10 },

    // Usuario 5
    { portion: "1", name_food: "Banana (150 g)", day: "Lunes", date_planning: new Date(), id_user: 5, id_food: 2 },
    { portion: "2", name_food: "Wok de vegetales con tofu", day: "Lunes", date_planning: new Date(), id_user: 5, id_food: 27 },
    { portion: "3", name_food: "Milanesa con puré (1 porción)", day: "Lunes", date_planning: new Date(), id_user: 5, id_food: 24 },

    { portion: "1", name_food: "Yogur descremado (200 g)", day: "Martes", date_planning: new Date(), id_user: 5, id_food: 9 },
    { portion: "2", name_food: "Tarta de verduras (1 porción)", day: "Martes", date_planning: new Date(), id_user: 5, id_food: 21 },
    { portion: "3", name_food: "Pizza muzzarella (1 porción)", day: "Martes", date_planning: new Date(), id_user: 5, id_food: 20 },

    { portion: "1", name_food: "Barrita de cereal (1 unidad)", day: "Miércoles", date_planning: new Date(), id_user: 5, id_food: 16 },
    { portion: "2", name_food: "Hamburguesa (250 g)", day: "Miércoles", date_planning: new Date(), id_user: 5, id_food: 8 },
    { portion: "3", name_food: "Fideos con salsa boloñesa", day: "Miércoles", date_planning: new Date(), id_user: 5, id_food: 25 },

    { portion: "1", name_food: "Tostadas con mermelada (2 unidades)", day: "Jueves", date_planning: new Date(), id_user: 5, id_food: 14 },
    { portion: "2", name_food: "Guiso de lentejas (250 g)", day: "Jueves", date_planning: new Date(), id_user: 5, id_food: 19 },
    { portion: "3", name_food: "Bife con ensalada (1 porción)", day: "Jueves", date_planning: new Date(), id_user: 5, id_food: 28 },

    { portion: "1", name_food: "Café (200 ml)", day: "Viernes", date_planning: new Date(), id_user: 5, id_food: 3 },
    { portion: "2", name_food: "Arroz con atún (250 g)", day: "Viernes", date_planning: new Date(), id_user: 5, id_food: 23 },
    { portion: "3", name_food: "Pollo a la plancha (150 g)", day: "Viernes", date_planning: new Date(), id_user: 5, id_food: 10 },

    { portion: "1", name_food: "Manzana (200 g)", day: "Sábado", date_planning: new Date(), id_user: 5, id_food: 1 },
    { portion: "2", name_food: "Ensalada mixta (300 g)", day: "Sábado", date_planning: new Date(), id_user: 5, id_food: 15 },
    { portion: "3", name_food: "Paella de mariscos (1 plato)", day: "Sábado", date_planning: new Date(), id_user: 5, id_food: 26 },

    { portion: "1", name_food: "Smoothie de frutas (250 ml)", day: "Domingo", date_planning: new Date(), id_user: 5, id_food: 22 },
    { portion: "2", name_food: "Tarta de verduras (1 porción)", day: "Domingo", date_planning: new Date(), id_user: 5, id_food: 21 },
    { portion: "3", name_food: "Fideos con salsa boloñesa", day: "Domingo", date_planning: new Date(), id_user: 5, id_food: 25 },

    // Usuario 6
    { portion: "1", name_food: "Galletitas de agua (30 g)", day: "Lunes", date_planning: new Date(), id_user: 6, id_food: 13 },
    { portion: "2", name_food: "Arroz con atún (250 g)", day: "Lunes", date_planning: new Date(), id_user: 6, id_food: 23 },
    { portion: "3", name_food: "Sopa de verduras (300 ml)", day: "Lunes", date_planning: new Date(), id_user: 6, id_food: 18 },

    { portion: "1", name_food: "Huevo duro (1 unidad)", day: "Martes", date_planning: new Date(), id_user: 6, id_food: 12 },
    { portion: "2", name_food: "Wok de vegetales con tofu", day: "Martes", date_planning: new Date(), id_user: 6, id_food: 27 },
    { portion: "3", name_food: "Pizza muzzarella (1 porción)", day: "Martes", date_planning: new Date(), id_user: 6, id_food: 20 },

    { portion: "1", name_food: "Chocolate (40 g)", day: "Miércoles", date_planning: new Date(), id_user: 6, id_food: 7 },
    { portion: "2", name_food: "Guiso de lentejas (250 g)", day: "Miércoles", date_planning: new Date(), id_user: 6, id_food: 19 },
    { portion: "3", name_food: "Bife con ensalada (1 porción)", day: "Miércoles", date_planning: new Date(), id_user: 6, id_food: 28 },

    { portion: "1", name_food: "Pan integral (2 rebanadas)", day: "Jueves", date_planning: new Date(), id_user: 6, id_food: 11 },
    { portion: "2", name_food: "Hamburguesa (250 g)", day: "Jueves", date_planning: new Date(), id_user: 6, id_food: 8 },
    { portion: "3", name_food: "Fideos con salsa boloñesa", day: "Jueves", date_planning: new Date(), id_user: 6, id_food: 25 },

    { portion: "1", name_food: "Yogur descremado (200 g)", day: "Viernes", date_planning: new Date(), id_user: 6, id_food: 9 },
    { portion: "2", name_food: "Tarta de verduras (1 porción)", day: "Viernes", date_planning: new Date(), id_user: 6, id_food: 21 },
    { portion: "3", name_food: "Paella de mariscos (1 plato)", day: "Viernes", date_planning: new Date(), id_user: 6, id_food: 26 },

    { portion: "1", name_food: "Banana (150 g)", day: "Sábado", date_planning: new Date(), id_user: 6, id_food: 2 },
    { portion: "2", name_food: "Milanesa con puré (1 porción)", day: "Sábado", date_planning: new Date(), id_user: 6, id_food: 24 },
    { portion: "3", name_food: "Pollo a la plancha (150 g)", day: "Sábado", date_planning: new Date(), id_user: 6, id_food: 10 },

    { portion: "1", name_food: "Té con leche (250 ml)", day: "Domingo", date_planning: new Date(), id_user: 6, id_food: 17 },
    { portion: "2", name_food: "Ensalada mixta (300 g)", day: "Domingo", date_planning: new Date(), id_user: 6, id_food: 15 },
    { portion: "3", name_food: "Fideos con salsa boloñesa", day: "Domingo", date_planning: new Date(), id_user: 6, id_food: 25 }
  ]);

  console.log('✅ Planning inserted successfully.');
  await pool.end();
}

seed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});
