import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Poga2Entity } from 'src/entities'

@Injectable()
export class FindPoga2Service {
  constructor(
    @InjectRepository(Poga2Entity)
    private readonly poga2Repository: Repository<Poga2Entity>
  ) {}

  public async findAllPoga2() {
    return await this.poga2Repository
      .createQueryBuilder('p')
      .select('p.uuidPoga2', 'uuidPoga2')
      .addSelect('p.title', 'title')
      .addSelect('p.notes', 'notes')
      .addSelect('p.dateStart', 'dateStart')
      .addSelect('p.dateEnd', 'dateEnd')
      .addSelect('p.dateSustentation', 'dateSustentation')
      .addSelect('p.dateGrade', 'dateGrade')
      .addSelect('p.state', 'state')
      .addSelect('p.modality', 'modality')
      .addSelect('p.settled', 'settled')
      .addSelect('p.director', 'director')
      .addSelect('p.studentOne', 'studentOne')
      .addSelect('p.studentTwo', 'studentTwo')
      .addSelect('p.juryOne', 'juryOne')
      .addSelect('p.juryTwo', 'juryTwo')
      .addSelect('p.juryThree', 'juryThree')
      .execute()
  }
}
/*

({
     
    })
*/
