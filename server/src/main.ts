import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// todo ==> implement the users service tomorrow
// todo ==> implement the authentication service tomorrow

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
