import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { StateEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { FAILED, SUCCESS } from 'src/modules/@common/constant/messages.constant'
import { Capitalize } from 'src/modules/@common/util/capitalize.util'

@Injectable()
export class CreateStateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>
  ) {}

  public async createState(state: string): Promise<IResponse> {
    state = Capitalize(state)
    const newState = await this.stateRepository.findOne({
      state: state,
    })

    if (!newState) {
      await this.stateRepository.save({ state })
      return { message: SUCCESS('Estado'), responseStatus: HttpStatus.OK }
    } else
      return { message: FAILED('Estado'), responseStatus: HttpStatus.NOT_FOUND }
  }
}
