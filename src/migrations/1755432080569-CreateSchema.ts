import { MigrationInterface, QueryRunner } from "typeorm";
import * as fs from "fs";
import * as path from "path";

export class SeedBooks1755432080569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // radi i u dev (ts) i u prod (dist)
        const candidates = [
            path.resolve(__dirname, "../seeds/books.json"),
            path.resolve(process.cwd(), "dist/seeds/books.json"),
            path.resolve(process.cwd(), "src/seeds/books.json"),
        ];

        const filePath = candidates.find((p) => fs.existsSync(p));
        if (!filePath) {
            console.warn("[SeedBooks] books.json not found in:", candidates);
            return;
        }

        const rawText = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(rawText);
        const books: any[] = Array.isArray(parsed) ? parsed : (parsed as any)?.default ?? [];
        if (!Array.isArray(books) || books.length === 0) return;

        const { count } = await queryRunner.manager
            .createQueryBuilder()
            .select("COUNT(*)", "count")
            .from("book", "b")
            .getRawOne();

        if (parseInt(count, 10) > 0) return;

        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("book")
            .values(
                books.map((b) => ({
                    title: b.title,
                    author: b.author,
                    publisher: b.publisher ?? null,
                    pages: b.pages ?? null,
                    year: b.year ?? null,
                    language: b.language ?? null,
                    isbn: b.isbn ?? null,
                    genres: b.genres ?? [],
                })),
            )
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear("book");
    }
}
