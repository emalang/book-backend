import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Book } from './book.entity';
@Injectable()
export class BookStatsService {
    constructor(
        @InjectRepository(Book)
        private readonly repo: Repository<Book>
    ) { }

    async getTotalBooks(): Promise<number> {
        return this.repo.count();
    }

    async getOlderBooks(year: number): Promise<Book[]> {
        return this.repo.find({
            where: {
                year: LessThan(year),
            },
            order: {
                year: 'ASC',
            },
        });
    }
}
