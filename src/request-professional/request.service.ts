import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import requestTable from './request.entity';
import patientTable from './patient.entity';
import usersTable from '@/user/user.entity';
import professionalTable from '@/professional/professional.entity';
import { sql } from 'drizzle-orm';

@Injectable()
export class RequestService {
    async getProfessionalRequests(id: number) {

        let row = await db
            .select()
            .from(requestTable)
            .where(
                and(eq(requestTable.id_professional, id),
                    eq(requestTable.state, 'pending'))
            )
            .innerJoin(
                usersTable,
                eq(usersTable.id, requestTable.id_user),
            );

        const data = row.map(row => ({
            id: row.request.id,
            state: row.request.state,
            name: row.users.name,
            lastname: row.users.lastname,
        }));

        return data;
    }

    async getUserRequest(id: number) {

        const row = await db
            .select()
            .from(requestTable)
            .where(
                and(eq(requestTable.id_user, id),
                    eq(requestTable.state, 'pending'))
            )
            .innerJoin(
                professionalTable,
                eq(professionalTable.id, requestTable.id_professional),
            );


        const data = row.map(row => ({
            id: row.request.id,
            name: row.professional.name,
            specialty: row.professional.specialty,
        }));

        return data;
    }

    async SendRequest(id: number, userId: number) {

        const [newRequest] = await db
            .insert(requestTable)
            .values({
                id_professional: id,
                id_user: userId,
                state: 'pending',
            })
            .returning();

        return newRequest;
    }

    async CancelRequest(id: number) {
        const [updatedRequest] = await db
            .update(requestTable)
            .set({ state: 'cancel' })
            .where(eq(requestTable.id, id))
            .returning();
        return updatedRequest
    }

    async ApproveRequest(id: number) {

        const [updatedRequest] = await db
            .update(requestTable)
            .set({ state: 'approved' })
            .where(eq(requestTable.id, id))
            .returning();

        await db
            .insert(patientTable)
            .values({
                id_professional: updatedRequest.id_professional,
                id_user: updatedRequest.id_user,
            })
            .returning();

        return updatedRequest;
    }
}