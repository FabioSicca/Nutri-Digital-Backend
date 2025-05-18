import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { eq, sql } from 'drizzle-orm';
import professionalTable, { Professional } from './professional.entity';
import reviewTable, { Review } from './review.entity';
import { ProfessionalDto } from './professional.dto';

@Injectable()
export class ProfessionalService {

    async getProfessionals(): Promise<ProfessionalDto[]> {
        const result = await db
          .select({
            id: professionalTable.id,
            name: professionalTable.name,
            specialty: professionalTable.specialty,
            total_score: sql<number>`COALESCE(SUM(${reviewTable.score}), 0)`,
            total_reviews: sql<number>`COUNT(${reviewTable.id})`
          })
          .from(professionalTable)
          .leftJoin(
            reviewTable,
            eq(reviewTable.id_professional, professionalTable.id)
          )
          .groupBy(professionalTable.id);
    
        return result as ProfessionalDto[];
      }
}