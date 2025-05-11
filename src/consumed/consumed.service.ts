import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { Consumed } from './consumed.entity';
import { ConsumedDto } from './consumed.dto';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';

@Injectable()
export class ConsumedService {

    async addFoodConsumed(consumedDto: ConsumedDto): Promise<Consumed> {
        //crear la fecha
        const user = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.id, consumedDto.id_user));
        
        const food = await db
            .select()
            .from(foodTable)
            .where(eq(foodTable.id, consumedDto.id_food));
        
        if (user != null && food != null) {
            console.log('NINGUNO ES NULO')
        } else {
            console.log('ALGUNO DE LOS DOS ES NULO')
        }

    }
}
