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
    return await this.poga2Repository.find({
      select: [
        'notes',
        'state',
        'uuidPoga2',
        'title',
        'modality',
        'settled',
        'dateStart',
        'dateEnd',
        'dateSustentation',
        'dateGrade',
        'director',
        'studentOne',
        'studentTwo',
        'juryOne',
        'juryTwo',
        'juryThree',
      ],
    })
  }
}
