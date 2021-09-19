import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SettledEntity } from 'src/entities'

@Injectable()
export class CreateSettledService {
  constructor(
    @InjectRepository(SettledEntity)
    private readonly settledRepository: Repository<SettledEntity>
  ) {}

  public async createSettled(settled: any) {
    const newSettled = await this.settledRepository.findOne({
      where: { settled: settled },
    })
    if (!newSettled) {
      await this.settledRepository.save({
        settledDate: settled.settledDate,
        inscriptionDate: settled.inscriptionDate,
        inscriptionDeadline: settled.inscriptionDeadline,
        inscriptionRecord: settled.inscriptionRecord,
      })
      return true
    } else return false
  }
}
