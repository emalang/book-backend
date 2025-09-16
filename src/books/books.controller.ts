import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, ParseArrayPipe, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { GetBooksQueryDto } from './dto/get-books-query.dto';
import { BookStatsService } from './book-stats.service';

@Controller('books')
export class BooksController {
    constructor(
        private readonly booksService: BooksService,
        private readonly booksStatsService: BookStatsService
    ) { }

    @Post()
    add(@Body() dto: CreateBookDto) {
        return this.booksService.add(dto);
    }

    @Post('seed')
    seed(@Body(new ParseArrayPipe({ items: CreateBookDto })) dtos: CreateBookDto[]) {
        return this.booksService.bulkInsert(dtos);
    }

    @Get()
    getAll(@Query() query: GetBooksQueryDto) {
        return this.booksService.getAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.booksService.getOne(id);
    }

    @Get('stats/after/year')
    getBooksAfter(@Param('year') year: number) {
        const books = this.booksService.getAll();
        return { total: this.booksStatsService.getOlderBooks(year) };
    }

    @Get('stats/total')
    getTotalBooks() {
        const books = this.booksService.getAll();
        return { total: this.booksStatsService.getTotalBooks() };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.booksService.delete(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: Partial<CreateBookDto>) {
        return this.booksService.update(+id, dto);
    }

    @Get('simulate-error')
    simulate() {
        return this.booksService.simulateCrash();
    }
}
