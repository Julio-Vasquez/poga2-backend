import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AgreementEntity } from 'src/entities'

@Injectable()
export class CreateAgreementService {
  constructor(
    @InjectRepository(AgreementEntity)
    private readonly agreementRepository: Repository<AgreementEntity>
  ) {}

  public async createAgreement(agreement: string) {
    const newAgreement = await this.agreementRepository.findOne({
      where: {
        agreement: agreement,
      },
    })

    if (!newAgreement) {
      await this.agreementRepository.save({
        agreement: agreement,
      })
      return true
    } else return false
  }
}
