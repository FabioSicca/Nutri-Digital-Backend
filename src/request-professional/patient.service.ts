import db from '../config/db.config';
import { Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import requestTable from './request.entity';
import patientTable from './patient.entity';
import usersTable from '@/user/user.entity';
import professionalTable from '@/professional/professional.entity';
import { sql } from 'drizzle-orm';

@Injectable()
export class PatientService {
    async getProfessional(id: number) {
        var row = await db
            .select()
            .from(patientTable)
            .where(eq(patientTable.id_user, id))
            .innerJoin(
                professionalTable,
                eq(professionalTable.id, patientTable.id_professional),
            );

        const data = row.map(row => ({
            id: row.professional.id,
            name: row.professional.name,
            specialty: row.professional.specialty,
        }));
        return data;
    }

    async getPatientst(id: number) {
        var row = await db
            .select()
            .from(patientTable)
            .where(eq(patientTable.id_professional, id))
            .innerJoin(
                usersTable,
                eq(usersTable.id, patientTable.id_user),
            );

        const data = row.map(row => ({
            id: row.users.id,
            name: row.users.name,
            lastname: row.users.lastname,
        }));
        return data;
    }
}