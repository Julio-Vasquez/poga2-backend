import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SettledEntity } from 'src/entities'

@Injectable()
export class FindSettledService {
  constructor(
    @InjectRepository(SettledEntity)
    private readonly settledRepository: Repository<SettledEntity>
  ) {}

  public async findAllSettled() {
    return await this.settledRepository.find({
      select: [
        'uuidSettled',
        'inscriptionDate',
        'inscriptionDeadline',
        'inscriptionRecord',
        'settledDate',
      ],
    })
  }
}
