import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title?: string;

    @Column()
    author?: string;

    @Column({ type: 'int', nullable: true })
    year?: number;

    @Column({ length: 20, nullable: true })
    isbn?: string;

    @Column('text', { array: true, default: [] })
    genres?: string[];

    @Column({ type: 'int', nullable: true })
    pages?: number;

    @Column({ length: 100, nullable: true })
    publisher?: string;

    @Column({ length: 10, nullable: true })
    language?: string;

    @Column({ type: 'text', nullable: true })
    image_url?: string;

}