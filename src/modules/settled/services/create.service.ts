import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AgreementEntity, CommitteeEntity, SettledEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { SettledDto } from '../dto/settled.dto'
import {
  FAILED,
  NO_EXISTS,
  SUCCESS,
} from 'src/modules/@common/constant/messages.constant'
import { Capitalize } from 'src/modules/@common/util/capitalize.util'

@Injectable()
export class CreateSettledService {
  constructor(
    @InjectRepository(SettledEntity)
    private readonly settledRepository: Repository<SettledEntity>,
    @InjectRepository(AgreementEntity)
    private readonly agreementRepository: Repository<AgreementEntity>,
    @InjectRepository(CommitteeEntity)
    private readonly committeeRepository: Repository<CommitteeEntity>
  ) {}

  public async createSettled(settled: SettledDto): Promise<IResponse> {
    const { agreement, committee, record, ...data } = settled

    const agreementEntity = await this.agreementRepository.findOne({
      agreement: Capitalize(agreement),
    })

    if (!agreementEntity)
      return {
        message: NO_EXISTS('Acuerdo'),
        responseStatus: HttpStatus.NOT_FOUND,
      }

    const committeeEntity = await this.committeeRepository.findOne({
      committee: Capitalize(committee),
    })

    if (!committeeEntity)
      return {
        message: NO_EXISTS('Comite'),
        responseStatus: HttpStatus.NOT_FOUND,
      }

    const newSettled = await this.settledRepository.findOne({
      record: Capitalize(record),
    })

    if (!newSettled) {
      await this.settledRepository.save({
        ...data,
        record: Capitalize(record),
        agreement: agreementEntity,
        committee: committeeEntity,
      })
      return {
        message: SUCCESS('Radicado'),
        responseStatus: HttpStatus.OK,
      }
    } else
      return {
        message: FAILED('Radicado'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
