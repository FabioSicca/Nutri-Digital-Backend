import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import consumedTable, { Consumed } from './consumed.entity';
import { ConsumedDto } from './consumed.dto';
import foodTable from '@/food/food.entity';
import usersTable from '@/user/user.entity';

@Injectable()
export class ConsumedService {

async addFoodConsumed(consumedDto: ConsumedDto): Promise<Consumed> {
  const user = await this.findUserById(consumedDto.id_user);
  const food = await this.findFoodById(consumedDto.id_food);

  if (!user) throw new Error('User not found');
  if (!food) throw new Error('Food not found');

  return await this.insertConsumedFood(consumedDto, user.id, food.id);
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
  const [newConsumed] = await db.insert(consumedTable).values({
    portion: dto.portion,
    unit: dto.unit,
    type_of_food: dto.type_of_food,
    id_user: userId,
    id_food: foodId,
    date_consumed: new Date(),
  }).returning();

  return newConsumed;
}

}
