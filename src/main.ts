import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // this will filter the message and receive only the fields that we are expecting to receive
      whitelist: true,
      //transform: true // to parse types
    }),
  );
  await app.listen(3000);
}

bootstrap();
