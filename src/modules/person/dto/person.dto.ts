import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class PersonDto {
  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly identification: number

  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsNumberString({ no_symbols: true })
  readonly phone: number

  @IsNotEmpty()
  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  @IsString()
  readonly role: string
}
