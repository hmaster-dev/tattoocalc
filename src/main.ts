import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const swaggerConfig = new DocumentBuilder()
      .setTitle('Tattoo calculator')
      .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs/', app, swaggerDocument);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '../../build/'));
  await app.listen(3001);
}
bootstrap();
