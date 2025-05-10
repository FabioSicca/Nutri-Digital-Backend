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