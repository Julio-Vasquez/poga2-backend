import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AgreementEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { FAILED, SUCCESS } from 'src/modules/@common/constant/messages.constant'

@Injectable()
export class CreateAgreementService {
  constructor(
    @InjectRepository(AgreementEntity)
    private readonly agreementRepository: Repository<AgreementEntity>
  ) {}

  public async createAgreement(agreement: string): Promise<IResponse> {
    const newAgreement = await this.agreementRepository.findOne({
      agreement: agreement,
    })

    if (!newAgreement) {
      await this.agreementRepository.save({ agreement })
      return { message: SUCCESS('Acuerdo'), responseStatus: HttpStatus.OK }
    } else
      return {
        message: FAILED('Acuerdo'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
