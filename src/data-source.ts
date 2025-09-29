import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

const hasHost = !!process.env.DB_HOST;
const hasUrl = !!process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
    type: 'postgres',
    ...(hasHost
        ? {
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '5432', 10),
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_NAME || 'nestjs',
        }
        : hasUrl
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
