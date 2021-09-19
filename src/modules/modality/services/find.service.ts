import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ModalityEntity } from 'src/entities'

@Injectable()
export class FindModalityService {
  constructor(
    @InjectRepository(ModalityEntity)
    private readonly modalityRepository: Repository<ModalityEntity>
  ) {}

  public async findAllModality() {
    return await this.modalityRepository.find({
      select: ['modality', 'uuidModality'],
    })
  }
}
