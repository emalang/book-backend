import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const hasUrl = !!process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
    type: 'postgres',
    ...(hasUrl
        ? { url: process.env.DATABASE_URL }
        : {
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'nestjs',
        }),
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    synchronize: false,
    logging: false,
});
