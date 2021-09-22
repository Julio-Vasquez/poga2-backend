import {
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator'

export class Poga2Dto {
  @IsNotEmpty()
  @IsString()
  readonly title: string

  @IsNotEmpty()
  @IsString()
  readonly notes: string

  @IsNotEmpty()
  @IsISO8601()
  readonly dateStart: string

  @IsNotEmpty()
  @IsISO8601()
  readonly dateEnd: string

  @IsNotEmpty()
  @IsISO8601()
  readonly dateSustentation: string

  @IsNotEmpty()
  @IsISO8601()
  readonly dateGrade: string

  @IsNotEmpty()
  @IsString()
  readonly state: string

  @IsNotEmpty()
  @IsString()
  readonly modality: string

  @IsNotEmpty()
  @IsString()
  readonly settled: string

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly director: number

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly studentOne: number

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly studentTwo: number

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly juryOne: number

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly juryTwo: number

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly juryThree: number
}
