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

@Injectable()
export class CreatePersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async createPerson(person: PersonDto): Promise<IResponse> {
    const { role, ...data } = person

    const roleEntity = await this.roleRepository.findOne({
      role: role,
    })

    if (!roleEntity)
      return { message: NO_EXISTS('Rol'), responseStatus: HttpStatus.NOT_FOUND }

    const newPerson = await this.personRepository.findOne({
      identification: data.identification,
    })

    if (!newPerson) {
      await this.personRepository.save({ ...data, role: roleEntity })
      return { message: SUCCESS('Persona'), responseStatus: HttpStatus.OK }
    } else
      return {
        message: FAILED('Persona'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
