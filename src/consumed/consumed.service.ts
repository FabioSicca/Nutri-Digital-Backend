import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { Consumed } from './consumed.entity';
import { ConsumedDto } from './consumed.dto';

@Injectable()
export class ConsumedService {

    async addFoodConsumed(consumedDto: ConsumedDto): Promise<Consumed> {
        //TODO: seguir con el refactor
        //poner logica para que existan los 2 ids
        //crear la fecha
        const [newUser] = await db
            .insert(usersTable)
            .values({
                user: userDto.user.toLowerCase(),
                lastname: userDto.lastname,
                name: userDto.name,
                password: userDto.password.toLowerCase(),
                role: userDto.role,
            })
            .returning();
        return newUser;
    }
}
