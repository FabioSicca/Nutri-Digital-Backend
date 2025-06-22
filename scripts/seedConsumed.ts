import consumedTable from '../src/consumed/consumed.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
});

const db = drizzle(pool);

async function seedConsumed() {
  await db.execute(
    `ALTER SEQUENCE consumed_id_seq RESTART WITH 1;`
  );

  await db.insert(consumedTable).values([
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-01"),
      id_user: 4,
      id_food: 3
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-01"),
      id_user: 4,
      id_food: 10
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-01"),
      id_user: 4,
      id_food: 1
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-01"),
      id_user: 4,
      id_food: 8
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-02"),
      id_user: 4,
      id_food: 9
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-02"),
      id_user: 4,
      id_food: 15
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-02"),
      id_user: 4,
      id_food: 16
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-02"),
      id_user: 4,
      id_food: 20
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-03"),
      id_user: 4,
      id_food: 11
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-03"),
      id_user: 4,
      id_food: 19
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-03"),
      id_user: 4,
      id_food: 2
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-03"),
      id_user: 4,
      id_food: 24
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-04"),
      id_user: 4,
      id_food: 4
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-04"),
      id_user: 4,
      id_food: 23
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-04"),
      id_user: 4,
      id_food: 17
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-04"),
      id_user: 4,
      id_food: 25
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-05"),
      id_user: 4,
      id_food: 12
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-05"),
      id_user: 4,
      id_food: 21
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-05"),
      id_user: 4,
      id_food: 6
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-05"),
      id_user: 4,
      id_food: 28
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-06"),
      id_user: 4,
      id_food: 14
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-06"),
      id_user: 4,
      id_food: 27
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-06"),
      id_user: 4,
      id_food: 22
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-06"),
      id_user: 4,
      id_food: 26
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-07"),
      id_user: 4,
      id_food: 3
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-07"),
      id_user: 4,
      id_food: 10
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-07"),
      id_user: 4,
      id_food: 1
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-07"),
      id_user: 4,
      id_food: 8
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-08"),
      id_user: 4,
      id_food: 9
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-08"),
      id_user: 4,
      id_food: 15
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-08"),
      id_user: 4,
      id_food: 16
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-08"),
      id_user: 4,
      id_food: 20
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-09"),
      id_user: 4,
      id_food: 11
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-09"),
      id_user: 4,
      id_food: 19
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-09"),
      id_user: 4,
      id_food: 2
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-09"),
      id_user: 4,
      id_food: 24
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-10"),
      id_user: 4,
      id_food: 4
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-10"),
      id_user: 4,
      id_food: 23
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-10"),
      id_user: 4,
      id_food: 17
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-10"),
      id_user: 4,
      id_food: 25
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-11"),
      id_user: 4,
      id_food: 12
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-11"),
      id_user: 4,
      id_food: 21
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-11"),
      id_user: 4,
      id_food: 6
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-11"),
      id_user: 4,
      id_food: 28
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-12"),
      id_user: 4,
      id_food: 14
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-12"),
      id_user: 4,
      id_food: 27
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-12"),
      id_user: 4,
      id_food: 22
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-12"),
      id_user: 4,
      id_food: 26
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-13"),
      id_user: 4,
      id_food: 3
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-13"),
      id_user: 4,
      id_food: 10
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-13"),
      id_user: 4,
      id_food: 1
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-13"),
      id_user: 4,
      id_food: 8
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-14"),
      id_user: 4,
      id_food: 9
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-14"),
      id_user: 4,
      id_food: 15
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-14"),
      id_user: 4,
      id_food: 16
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-14"),
      id_user: 4,
      id_food: 20
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-15"),
      id_user: 4,
      id_food: 11
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-15"),
      id_user: 4,
      id_food: 19
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-15"),
      id_user: 4,
      id_food: 2
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-15"),
      id_user: 4,
      id_food: 24
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-16"),
      id_user: 4,
      id_food: 4
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-16"),
      id_user: 4,
      id_food: 23
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-16"),
      id_user: 4,
      id_food: 17
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-16"),
      id_user: 4,
      id_food: 25
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-17"),
      id_user: 4,
      id_food: 12
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-17"),
      id_user: 4,
      id_food: 21
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-17"),
      id_user: 4,
      id_food: 6
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-17"),
      id_user: 4,
      id_food: 28
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-18"),
      id_user: 4,
      id_food: 14
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-18"),
      id_user: 4,
      id_food: 27
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-18"),
      id_user: 4,
      id_food: 22
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-18"),
      id_user: 4,
      id_food: 26
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-19"),
      id_user: 4,
      id_food: 3
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-19"),
      id_user: 4,
      id_food: 10
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-19"),
      id_user: 4,
      id_food: 1
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-19"),
      id_user: 4,
      id_food: 8
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-20"),
      id_user: 4,
      id_food: 9
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-20"),
      id_user: 4,
      id_food: 15
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-20"),
      id_user: 4,
      id_food: 16
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-20"),
      id_user: 4,
      id_food: 20
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-21"),
      id_user: 4,
      id_food: 11
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-21"),
      id_user: 4,
      id_food: 19
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-21"),
      id_user: 4,
      id_food: 2
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-21"),
      id_user: 4,
      id_food: 24
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-22"),
      id_user: 4,
      id_food: 4
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-22"),
      id_user: 4,
      id_food: 23
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-22"),
      id_user: 4,
      id_food: 17
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-22"),
      id_user: 4,
      id_food: 25
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-23"),
      id_user: 4,
      id_food: 12
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-23"),
      id_user: 4,
      id_food: 21
    },
    {
      portion: "3",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-23"),
      id_user: 4,
      id_food: 6
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-23"),
      id_user: 4,
      id_food: 28
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-24"),
      id_user: 4,
      id_food: 14
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-24"),
      id_user: 4,
      id_food: 27
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Merienda",
      date_consumed: new Date("2025-06-24"),
      id_user: 4,
      id_food: 22
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Cena",
      date_consumed: new Date("2025-06-24"),
      id_user: 4,
      id_food: 26
    },
    {
      portion: "1",
      unit: "Porcion",
      type_of_food: "Desayuno",
      date_consumed: new Date("2025-06-25"),
      id_user: 4,
      id_food: 3
    },
    {
      portion: "2",
      unit: "Porcion",
      type_of_food: "Almuerzo",
      date_consumed: new Date("2025-06-25"),
      id_user: 4,
      id_food: 10
    },

    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-01"), id_user: 5, id_food: 2 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-01"), id_user: 5, id_food: 25 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-02"), id_user: 5, id_food: 6 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-02"), id_user: 5, id_food: 24 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-03"), id_user: 5, id_food: 3 },
    { portion: "2", unit: "Porcion", type_of_food: "Aperitivo", date_consumed: new Date("2025-06-04"), id_user: 5, id_food: 5 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-04"), id_user: 5, id_food: 26 },
    { portion: "3", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-05"), id_user: 5, id_food: 23 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-06"), id_user: 5, id_food: 12 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-06"), id_user: 5, id_food: 16 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-07"), id_user: 5, id_food: 8 },
    { portion: "3", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-07"), id_user: 5, id_food: 20 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-08"), id_user: 5, id_food: 14 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-09"), id_user: 5, id_food: 9 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-10"), id_user: 5, id_food: 21 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-11"), id_user: 5, id_food: 27 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-12"), id_user: 5, id_food: 11 },
    { portion: "2", unit: "Porcion", type_of_food: "Aperitivo", date_consumed: new Date("2025-06-13"), id_user: 5, id_food: 7 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-13"), id_user: 5, id_food: 18 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-14"), id_user: 5, id_food: 22 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-15"), id_user: 5, id_food: 10 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-15"), id_user: 5, id_food: 13 },
    { portion: "3", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-16"), id_user: 5, id_food: 19 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-17"), id_user: 5, id_food: 17 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-18"), id_user: 5, id_food: 28 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-19"), id_user: 5, id_food: 24 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-20"), id_user: 5, id_food: 6 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-21"), id_user: 5, id_food: 1 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-22"), id_user: 5, id_food: 15 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-23"), id_user: 5, id_food: 26 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-24"), id_user: 5, id_food: 3 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-25"), id_user: 5, id_food: 9 },

    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-01"), id_user: 6, id_food: 3 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-01"), id_user: 6, id_food: 10 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-02"), id_user: 6, id_food: 24 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-03"), id_user: 6, id_food: 6 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-03"), id_user: 6, id_food: 17 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-04"), id_user: 6, id_food: 25 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-04"), id_user: 6, id_food: 19 },
    { portion: "2", unit: "Porcion", type_of_food: "Aperitivo", date_consumed: new Date("2025-06-05"), id_user: 6, id_food: 5 },
    { portion: "3", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-06"), id_user: 6, id_food: 12 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-06"), id_user: 6, id_food: 9 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-07"), id_user: 6, id_food: 23 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-07"), id_user: 6, id_food: 20 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-08"), id_user: 6, id_food: 1 },
    { portion: "1", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-09"), id_user: 6, id_food: 13 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-10"), id_user: 6, id_food: 21 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-11"), id_user: 6, id_food: 27 },
    { portion: "3", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-12"), id_user: 6, id_food: 14 },
    { portion: "2", unit: "Porcion", type_of_food: "Aperitivo", date_consumed: new Date("2025-06-13"), id_user: 6, id_food: 7 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-13"), id_user: 6, id_food: 26 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-14"), id_user: 6, id_food: 22 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-15"), id_user: 6, id_food: 28 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-15"), id_user: 6, id_food: 16 },
    { portion: "2", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-16"), id_user: 6, id_food: 18 },
    { portion: "1", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-17"), id_user: 6, id_food: 15 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-18"), id_user: 6, id_food: 11 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-19"), id_user: 6, id_food: 6 },
    { portion: "3", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-20"), id_user: 6, id_food: 24 },
    { portion: "1", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-21"), id_user: 6, id_food: 3 },
    { portion: "2", unit: "Porcion", type_of_food: "Almuerzo", date_consumed: new Date("2025-06-22"), id_user: 6, id_food: 8 },
    { portion: "1", unit: "Porcion", type_of_food: "Cena", date_consumed: new Date("2025-06-23"), id_user: 6, id_food: 19 },
    { portion: "2", unit: "Porcion", type_of_food: "Merienda", date_consumed: new Date("2025-06-24"), id_user: 6, id_food: 9 },
    { portion: "2", unit: "Porcion", type_of_food: "Desayuno", date_consumed: new Date("2025-06-25"), id_user: 6, id_food: 2 },

  ]);

  console.log('✅ Consumed inserted successfully.');
  await pool.end();
}

seedConsumed().catch((err) => {
  console.error('❌ Error inserting seed data:', err);
  pool.end();
});