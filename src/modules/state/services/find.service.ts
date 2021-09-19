import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { StateEntity } from 'src/entities'

@Injectable()
export class FindStateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>
  ) {}

  public async findAllState(): Promise<StateEntity[]> {
    return await this.stateRepository.find({
      select: ['state', 'uuidState'],
    })
  }
}
