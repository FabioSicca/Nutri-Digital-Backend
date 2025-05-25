import db from '../config/db.config';
import messagesTable, { Messages } from './messages.entity';
import usersTable from '@/user/user.entity';
import { Injectable } from '@nestjs/common';
import { eq, or, and } from 'drizzle-orm';

@Injectable()
export class MessagesService {
	private async findUserById(id: number) {
		const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
		return user;
	}

	async addMessage(sender_user_id: number, recipient_user_id: number, text_content: string) {
		let sender_user = await this.findUserById(sender_user_id);
		if (!sender_user) throw new Error('Sender user not found');
		let recipient_user = await this.findUserById(recipient_user_id);
		if (!recipient_user) throw new Error('Recipient user not found');
		return await this.insertMessageOnTable(sender_user_id, recipient_user_id, text_content);
	}

	private async insertMessageOnTable(sender_user_id: number, recipient_user_id: number, text_content: string) {
		const [newMessage] = await db
			.insert(messagesTable)
			.values({
				sender_user_id: sender_user_id,
				recipient_user_id: recipient_user_id,
				text_content: text_content,
			})
			.returning();
		return newMessage;
	}

	async getMessagesExchanged(my_user_id: number, target_user_id: number,) {
		const resp = await db
			.select()
			.from(messagesTable)
			.where(
				or(
					and(
						eq(messagesTable.recipient_user_id, my_user_id),
						eq(messagesTable.sender_user_id, target_user_id),
					),
					and(
						eq(messagesTable.recipient_user_id, target_user_id),
						eq(messagesTable.sender_user_id, my_user_id),
					),
				),
			);
		return resp;
	}
	
}
