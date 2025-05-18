import db from '../config/db.config';
import hidratationTable, { Hidratation } from './hidratation.entity';
import usersTable from '@/user/user.entity';
import { Injectable } from '@nestjs/common';
import { eq, and } from 'drizzle-orm';

@Injectable()
export class HidratationService {
	async getFoods(id: number, date: Date): Promise<Hidratation[]> {
		const resp = await db
			.select()
			.from(hidratationTable)
			.where(eq(hidratationTable.id_user, id));
		return resp;
	}

	async addHidratationConsumed(id: number, mililiters: number) {
		const user = await this.findUserById(id);
		if (!user) throw new Error('User not found');

		return await this.insertConsumedHidratation(id, mililiters);
	}

	private async findUserById(id: number) {
		const [user] = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.id, id));
		return user;
	}

	private async insertConsumedHidratation(id: number, mililiters: number) {
		const today = new Date();
		const [newConsumed] = await db
			.insert(hidratationTable)
			.values({
				id_user: id,
				mililiters: mililiters,
				date_consumed: new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate(),
				),
			})
			.returning();
		return newConsumed;
	}

	async getHidratationConsumed(id: number, date: Date) {
		const resp = await db
			.select()
			.from(hidratationTable)
			.where(
				and(
					eq(hidratationTable.date_consumed, date),
					eq(hidratationTable.id_user, id),
				),
			);
		return resp;
	}

	async deleteHidratationConsumed(id: number, date: Date) {
		await db
			.delete(hidratationTable)
			.where(
				and(
					eq(hidratationTable.date_consumed, date),
					eq(hidratationTable.id_user, id),
				),
			);

		return true;
	}
}
