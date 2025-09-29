import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImageUrlAndBackfill1760000000000 implements MigrationInterface {
    public async up(q: QueryRunner): Promise<void> {
        const has = await q.hasColumn('book', 'image_url');
        if (!has) {
            await q.addColumn('book', new TableColumn({
                name: 'image_url',
                type: 'text',
                isNullable: true,
            }));
        }

        await q.query(`
      UPDATE "book"
      SET image_url = 'https://covers.openlibrary.org/b/isbn/' || isbn || '-L.jpg'
      WHERE image_url IS NULL AND isbn IS NOT NULL AND length(trim(isbn)) > 0
    `);
    }

    public async down(q: QueryRunner): Promise<void> {
        const has = await q.hasColumn('book', 'image_url');
        if (has) {
            await q.dropColumn('book', 'image_url');
        }
    }
}
