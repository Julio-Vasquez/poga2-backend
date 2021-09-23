import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CommitteeEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { FAILED, SUCCESS } from 'src/modules/@common/constant/messages.constant'
import { Capitalize } from 'src/modules/@common/util/capitalize.util'

@Injectable()
export class CreateCommitteeService {
  constructor(
    @InjectRepository(CommitteeEntity)
    private readonly committeeRepository: Repository<CommitteeEntity>
  ) {}

  public async createCommittee(committee: string): Promise<IResponse> {
    committee = Capitalize(committee)
    const newCommittee = await this.committeeRepository.findOne({
      committee: committee,
    })
    if (!newCommittee) {
      await this.committeeRepository.save({ committee })
      return { message: SUCCESS('Comite'), responseStatus: HttpStatus.OK }
    } else
      return { message: FAILED('Comite'), responseStatus: HttpStatus.NOT_FOUND }
  }
}
