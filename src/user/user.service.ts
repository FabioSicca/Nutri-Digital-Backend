import db from '../config/db.config';
import usersTable, { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { eq, and } from 'drizzle-orm';

@Injectable()
export class UserService {
	async getUser(id: number): Promise<User[]> {
		const resp = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.id, id));
		return resp;
	}

	async createUser(userDto: UserDto): Promise<User> {
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

	async findUserByEmailAndPassword(user: string, password: string) {
		const userdb = await db
			.select()
			.from(usersTable)
			.where(
				and(
					eq(usersTable.user, user),
					eq(usersTable.password, password)
				)
			)
	
		return userdb;
	}
}
