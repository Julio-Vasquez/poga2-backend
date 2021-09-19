import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { StateEntity } from 'src/entities'

@Injectable()
export class CreateStateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>
  ) {}

  public async createState(state: string) {
    const newState = await this.stateRepository.findOne({
      where: {
        state: state,
      },
    })

    if (!newState) {
      await this.stateRepository.save({
        state: state,
      })
      return true
    } else return false
  }
}
