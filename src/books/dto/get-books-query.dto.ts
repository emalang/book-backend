import { buildMessage, IsArray, IsIn, IsInt, IsOptional, IsString, Max, MaxLength, Min, Validate, ValidateBy, ValidatorConstraint } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import ISO6391 from 'iso-639-1';

@ValidatorConstraint({ name: 'IsIso6391', async: false })
class IsIso6391Constraint {
    validate(value: string) {
        return typeof value === 'string' && ISO6391.validate(value.toLowerCase());
    }
    defaultMessage() {
        return 'Language must be a valid ISO 639-1 code (e.g., en, fr, hr)';
    }
}

export class GetBooksQueryDto {
    @IsOptional()
    @IsString()
    @MaxLength(200)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    q?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    title?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    author?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    publisher?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    maxPages?: number;

    @IsOptional()
    @Transform(({ value }) => {
        if (Array.isArray(value)) {
            return value.map(v => String(v).trim().toLowerCase()).filter(Boolean);
        }
        if (typeof value == 'string') {
            return value
                .split(',')
                .map(v => v.trim().toLowerCase())
                .filter(Boolean);
        }
        return undefined;
    })
    @IsArray()
    @IsString({ each: true })
    genres?: string[];

    @IsOptional()
    @IsIn(['any', 'all', 'exact'])
    genresMode?: 'any' | 'all' | 'exact';

    @IsOptional()
    @Validate(IsIso6391Constraint as any)
    @Transform(({ value }) => (typeof value == 'string' ? value.toLowerCase().trim() : value))
    language?: string;

    @IsOptional()
    @Transform(({ value }) => Number(value))
    @IsInt()
    @Min(1)
    @Max(100)
    perPage?: number = 10;

    @IsOptional()
    @Transform(({ value }) => Number(value))
    @IsInt()
    @Min(1)
    @Max(100)
    page?: number = 1;


}

