import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Se habilita CORS para pruebas en desarrollo.
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Transfer-APP API documentation')
  .setDescription('API para mi sitio de transfers')
  .setVersion('1.0')
  .addTag('recipients')
  .addTag('transfers')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
