import foodTable from '../src/food/food.entity';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

async function loadFoodData() {
    try {
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:123456@localhost:5432/nutridigitaldb',
          });
        const filePath = path.join(__dirname, './alimentos.json');
        const db = drizzle(pool);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const foodData = JSON.parse(fileContent);

        for (const food of foodData) {
            await db.insert(foodTable).values({
                name: food.name.toLowerCase(),
                brand: food.brand,
                serving: food.serving || '',
                calories: food.calories || 0,
                href: food.href,
                external_id: food.external_id,
                searchTerm: food.searchTerm,
                sodium: food.Sodium || '',
                total_fat: food['Total Fat'] || '',
                potassium: food.Potassium || '',
                saturated: food.Saturated || '',
                total_carbs: food['Total Carbs'] || '',
                polyunsaturated: food.Polyunsaturated || '',
                dietary_fiber: food['Dietary Fiber'] || '',
                monounsaturated: food.Monounsaturated || '',
                sugars: food.Sugars || '',
                trans: food.Trans || '',
                protein: food.Protein || '',
                cholesterol: food.Cholesterol || '',
                vitamin_a: food['Vitamin A'] || '',
                calcium: food.Calcium || '',
                vitamin_c: food['Vitamin C'] || '',
                iron: food.Iron || '',
            });
        }

        console.log('Datos cargados exitosamente en la tabla food.');
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

loadFoodData();