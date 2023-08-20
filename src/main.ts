import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // dotenv.config({ path: '.env.dev' }); // Load variables from .env file



  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USERNAME;
  const dbPass = process.env.DB_PASSWORD;

  

  console.log(`Database Host: ${dbHost}`);
  console.log(`Database User: ${dbUser}`);
  console.log(`Database Password: ${dbPass}`);


  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('GMUS')
    .setDescription('Gaith and Mustafa API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT || 3000,'0.0.0.0');
}
bootstrap();
// "migration:generate:dev": "npm run typeorm:dev -- -d ./database/typeorm.config.ts migration:generate",
