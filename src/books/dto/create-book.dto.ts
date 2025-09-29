import { IsString, IsOptional, IsInt, Min, Max, IsNotEmpty, IsUrl, IsEnum, MaxLength, Length, IsArray } from 'class-validator';



export class CreateBookDto {

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  author?: string;

  @IsOptional()
  @IsInt()
  @Min(1900)
  @Max(2025)
  year?: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  isbn?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  genres?: string[];

  @IsOptional()
  @IsInt()
  @Min(1)
  pages?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  publisher?: string;

  @IsOptional()
  @IsString()
  @Length(2, 10)
  language?: string;

  @IsString()
  @IsNotEmpty()
  image_url?: string;

}
