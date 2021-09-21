import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PersonDto } from '../dto/person.dto'
import { PersonEntity } from 'src/entities'

@Injectable()
export class CreatePersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>
  ) {}

  public async createPerson(person: PersonDto) {
    const newPerson = await this.personRepository.findOne({
      where: {
        identification: person.identification,
      },
    })
    if (!newPerson) {
      await this.personRepository.save({
        ...person,
      })
      return true
    } else return false
  }
}
