import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export interface GoodResponse<T> {
	status: 'success';
	data: T | null;
}

export interface BadResponse {
	status: 'error';
	message: string | null;
	url: string;
}

export type StandardResponse<T> = GoodResponse<T> | BadResponse;

export function success<T>(data?: T | null): GoodResponse<T> {
	return {
		status: 'success',
		data: data ?? null,
	};
}

export function GetUserId(headers: any): number {
	const authHeader = headers['authorization'] || headers['Authorization'];
	const token = authHeader?.split(' ')[1];
	const payload = jwt.decode(token);
	let userId;
	if (payload && typeof payload === 'object') {
		userId = payload['id'];
	} else {
		throw new UnauthorizedException('Token not provided');
	}
	return userId;
}

export function GetDay(date: string) {
	if (date === undefined || date === null) {
		return new Date();

	} else {
		return new Date(date);
	}
}

export async function GetDistance(origin: string, destination: string): Promise<number> {
    try {
        const axios = require('axios');
        const encodedOrigin = encodeURIComponent(origin);
        const encodedDestination = encodeURIComponent(destination);
        const url = `https://api-v2.distancematrix.ai/maps/api/distancematrix/json?origins=${encodedOrigin}&destinations=${encodedDestination}&key=${process.env.API_DISTANCEMATRIX}`;

        const response = await axios.get(url);
        const data = response.data;
        return data.rows[0].elements[0].distance.value;
    } catch (error) {
        console.error(error);
        return 0;
    }
}
