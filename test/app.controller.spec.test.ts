import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../src/user/user.controller';
import { UserService } from '../src/user/user.service';

describe('AppController', () => {
	let appController: UserController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserService],
		}).compile();

		appController = app.get<UserController>(UserController);
	});

	/*describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(appController.emptyResponse()).toStrictEqual({
				status: 'ok',
			});
		});
	});*/
});
