import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	BadRequestException,
	UnauthorizedException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			catchError((err) => {
				if (err instanceof BadRequestException) {
					return throwError(() => err);
				}

				if (err instanceof UnauthorizedException) {
					return throwError(() => err);
				}

				return throwError(() => ({
					statusCode: 500,
					message: err.message || 'Internal server error',
				}));
			}),
		);
	}
}
