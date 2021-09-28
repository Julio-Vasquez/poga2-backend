import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class PersonDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly identification: number

  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsNumberString()
  readonly phone: number

  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @IsNotEmpty()
  @IsString()
  readonly role: string

  readonly urlPhoto: any
}
