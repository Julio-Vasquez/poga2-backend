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
    return await this.personRepository
      .createQueryBuilder('p')
      .select('p.uuidPerson', 'uuidPerson')
      .addSelect('p.identification', 'identification')
      .addSelect('p.name', 'name')
      .addSelect('p.email', 'email')
      .addSelect('p.phone', 'phone')
      .addSelect('p.role', 'role')
      .execute()
  }
}
