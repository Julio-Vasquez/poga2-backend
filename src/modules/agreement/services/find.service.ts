import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AgreementEntity } from 'src/entities'

@Injectable()
export class FindAgreementService {
  constructor(
    @InjectRepository(AgreementEntity)
    private readonly agreementRepository: Repository<AgreementEntity>
  ) {}

  public async findAllAgreement() {
    return await this.agreementRepository.find({
      select: ['agreement', 'uuidAgreement'],
    })
  }
}
