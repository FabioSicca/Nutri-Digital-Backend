import db from '../config/db.config';
import reviewsTable, { Reviews } from './reviews.entity';
import usersTable from '@/user/user.entity';
import professionalTable from './professional.entity';
import { Injectable } from '@nestjs/common';
import { eq, or, and } from 'drizzle-orm';


@Injectable()
export class ReviewsService {
	private async findUserById(id: number) {
		const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
		return user;
	}
	private async findProfessionalById(id: number) {
		const [professional] = await db.select().from(professionalTable).where(eq(professionalTable.id, id));
		return professional;
	}

	async addReview(user_id: number, professional_id: number, score: number, comment: string, review_date: Date) {
		let user = await this.findUserById(user_id);
		if (!user) throw new Error('Reviewer user not found');
		let professional = await this.findProfessionalById(professional_id);
		if (!professional) throw new Error('Professional user not found');
		return await this.insertReviewOnTable(user_id, professional_id, score, comment, review_date);
	}

	private async insertReviewOnTable(user_id: number, professional_id: number, score: number, comment: string, review_date: Date) {
		const [newReview] = await db
			.insert(reviewsTable)
			.values({
				user_id: user_id,
				professional_id: professional_id,
				score: score,
				comment: comment,
				review_date: review_date,
			})
			.returning();
		return newReview;
	}

	public async getReviewsOfProfessional(professional_id: number,) {
		const resp = await db
			.select()
			.from(reviewsTable)
			.where(eq(reviewsTable.professional_id, professional_id),);
		return resp;
	}
}
