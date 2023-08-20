import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import fs from 'fs'
export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],
  "ssl": process.env.NODE_ENV === 'prod'
    ? {
      requestCert: true,
      rejectUnauthorized: true,
      ca: fs.readFileSync(`${process.cwd()}/ca-certificate.crt`).toString(),
    }
    : undefined,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  migrationsTableName: 'migrations',
} as TypeOrmModuleOptions));