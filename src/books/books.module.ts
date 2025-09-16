import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookStatsService } from './book-stats.service';
import { LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BookStatsService],
  controllers: [BooksController]
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('books');
  }
}
