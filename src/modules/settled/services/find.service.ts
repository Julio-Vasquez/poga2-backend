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
    return await this.settledRepository
      .createQueryBuilder('s')
      .select('s.uuidSettled', 'uuidSettled')
      .addSelect('s.inscriptionDate', 'inscriptionDate')
      .addSelect('s.inscriptionDeadline', 'inscriptionDeadline')
      .addSelect('s.record', 'record')
      .addSelect('s.settledDate', 'settledDate')
      .addSelect('s.committee', 'committee')
      .addSelect('s.agreement', 'agreement')
      .execute()
  }
}
