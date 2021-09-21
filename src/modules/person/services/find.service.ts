import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities'
import { Repository } from 'typeorm'

@Injectable()
export class FindPersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>
  ) {}

  public async findAllPerson() {
    return await this.personRepository.find({
      select: ['email', 'name', 'phone', 'identification', 'uuidPerson'],
    })
  }
}
