import { IsISO8601, IsNotEmpty, IsString } from 'class-validator'

export class SettledDto {
  @IsNotEmpty()
  @IsISO8601()
  readonly settledDate: string

  @IsNotEmpty()
  @IsString()
  readonly inscriptionRecord: string

  @IsNotEmpty()
  @IsISO8601()
  readonly inscriptionDeadline: string

  @IsNotEmpty()
  @IsISO8601()
  readonly inscriptionDate: string

  @IsNotEmpty()
  @IsString()
  readonly committee: string

  @IsNotEmpty()
  @IsString()
  readonly agreement: string
}
