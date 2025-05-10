import { NestFactory } from '@nestjs/core';
import { AppModule } from './user.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ErrorInterceptor } from './interceptors/error.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	const config = new DocumentBuilder()
		.setTitle('Nutri-Digital Documentation')
		.setDescription('Endpoints for all Nutri-Digital operations')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document);
	app.useGlobalInterceptors(new ErrorInterceptor());
	await app.listen(3000);
}
bootstrap();
