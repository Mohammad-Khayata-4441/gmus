import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource } from "typeorm";

config()

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    database: configService.get('DB_DATABASE'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    logging: true,
    logger: 'file',
    entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
    migrationsTableName: 'migrations',
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
})