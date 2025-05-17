import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import consumedTable, { Consumed } from './consumed.entity';
import { ConsumedDto } from './dto/consumed.dto';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';
import { DeleteConsumedDto } from './dto/delete.consumed.dto';

@Injectable()
export class ConsumedService {

  async addFoodConsumed(consumedDto: ConsumedDto): Promise<Consumed> {
    const user = await this.findUserById(consumedDto.id_user);
    const food = await this.findFoodById(consumedDto.id_food);

    if (!user) throw new Error('User not found');
    if (!food) throw new Error('Food not found');

    return await this.insertConsumedFood(consumedDto, user.id, food.id);
  }


  async deleteFoodConsumed(body: DeleteConsumedDto) {
    const { id_user, id_food, date_consumed } = body;
    const dateOnly = new Date(date_consumed);  
  
    const result = await db
      .delete(consumedTable)
      .where(
        and(
          eq(consumedTable.id_user, id_user),
          eq(consumedTable.id_food, id_food),
          eq(consumedTable.date_consumed, dateOnly)
        )
      );

    if (result.rowCount === 0) throw new Error('No records deleted');
  }

  private async findUserById(id: number) {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
    return user;
  }

  private async findFoodById(id: number) {
    const [food] = await db.select().from(foodTable).where(eq(foodTable.id, id));
    return food;
  }

  private async insertConsumedFood(dto: ConsumedDto, userId: number, foodId: number): Promise<Consumed> {
    const today = new Date();
    const dateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    const [newConsumed] = await db.insert(consumedTable).values({
      portion: dto.portion,
      unit: dto.unit,
      type_of_food: dto.type_of_food,
      id_user: userId,
      id_food: foodId,
      date_consumed: dateOnly,
    }).returning();

    return newConsumed;
  }

}
