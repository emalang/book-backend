import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetBooksQueryDto } from './dto/get-books-query.dto';
import { error } from 'console';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import ISO6391 from 'iso-639-1';

@Injectable()
export class BooksService {
    private books: any[] = []

    constructor(
        @InjectRepository(Book)
        private readonly repo: Repository<Book>,
    ) { }

    async add(book: CreateBookDto): Promise<Book> {
        const newBook = await this.repo.create(book);
        return this.repo.save(newBook);
    }

    async bulkInsert(books: CreateBookDto[]): Promise<Book[]> {
        const entities = this.repo.create(books);
        return this.repo.save(entities);
    }

    async getAll(query?: GetBooksQueryDto): Promise<Book[]> {
        const qb = this.repo.createQueryBuilder('book');

        if (query?.q) {
            qb.andWhere(
                '(book.title ILIKE :q OR book.author ILIKE :q OR book.publisher ILIKE :q)',
                { q: `%${query.q}%` },

            )
        }

        if (query?.title) {
            qb.andWhere('book.title ILIKE :title', { title: `%${query.title}%` });
        }
        if (query?.author) {
            qb.andWhere('book.author ILIKE :author', { author: `%${query.author}%` });
        }
        if (query?.publisher) {
            qb.andWhere('book.publisher ILIKE :publisher', { publisher: `%${query.publisher}%` });
        }
        if (query?.maxPages !== undefined) {
            qb.andWhere('book.pages <= :maxPages', { maxPages: query.maxPages });
        }
        if (query?.genres && query.genres.length > 0) {
            const genres = query.genres;
            switch (query.genresMode ?? 'any') {
                case 'all':
                    qb.andWhere('book.genres @> :genres::text[]', { genres });
                    break;
                case 'exact':
                    qb.andWhere('book.genres @> :genres::text[]', { genres });
                    qb.andWhere('book.genres <@ :genres::text[]', { genres });
                    break;
                default:
                    qb.andWhere('book.genres && :genres::text[]', { genres });
            }
        }
        if (query?.language) {
            qb.andWhere('LOWER(book.language) = :lang', { lang: query.language });
        }

        const perPage = query?.perPage ?? 10;
        const page = query?.page ?? 1;
        const offset = (page - 1) * perPage;
        qb.skip(offset).take(perPage);
        qb.orderBy('book.year IS NULL', 'ASC')
            .addOrderBy('book.year', 'DESC')
            .addOrderBy('book.id', 'ASC');

        return qb.getMany();
    }

    async getOne(id: number): Promise<Book> {
        const book = await this.repo.findOneBy({ id });
        if (!book) {
            throw new NotFoundException({
                error: `Book with ID ${id} not found`,
                code: 404
            });
        }
        return book;
    }

    async delete(id: number) {
        const book = await this.repo.findOneBy({ id });
        if (!book) {
            throw new NotFoundException({
                error: `Book with ID ${id} not found`,
                code: 404
            });
        }
        await this.repo.remove(book);
        return { message: `Deleted book with ID ${id}` };
    }

    async update(id: number, updateData: Partial<CreateBookDto>) {
        const book = await this.repo.findOneBy({ id });
        if (!book) {
            throw new NotFoundException({
                error: `Book with ID ${id} not found`,
                code: 404
            });
        }
        Object.assign(book, updateData);
        await this.repo.save(book);
        return book;
    }

    simulateCrash() {
        throw new Error('Unexpected crash in books service.');
    }
}
