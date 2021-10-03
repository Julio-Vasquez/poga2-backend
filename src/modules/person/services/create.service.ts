import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PersonDto } from '../dto/person.dto'
import { PersonEntity, RoleEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import {
  FAILED,
  NO_EXISTS,
  SUCCESS,
} from 'src/modules/@common/constant/messages.constant'
import { Capitalize } from 'src/modules/@common/util/capitalize.util'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CreatePersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    private readonly configService: ConfigService
  ) {}

  public async createPerson(
    person: PersonDto,
    file: Express.Multer.File
  ): Promise<IResponse> {
    console.log(person)

    const { role, ...data } = person
    const roleEntity = await this.roleRepository.findOne({
      role: Capitalize(role),
    })

    if (!roleEntity)
      return { message: NO_EXISTS('Rol'), responseStatus: HttpStatus.NOT_FOUND }

    const newPerson = await this.personRepository.findOne({
      identification: data.identification,
    })

    if (!newPerson) {
      console.log(this.configService.get<string>('app.deploy'))
      await this.personRepository.save({
        ...data,
        urlPhoto: `${this.configService.get<string>('app.deploy')}/${
          file.filename
        }`,
        role: roleEntity,
      })
      return { message: SUCCESS('Persona'), responseStatus: HttpStatus.OK }
    } else
      return {
        message: FAILED('Persona'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
