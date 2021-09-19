import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ModalityEntity } from 'src/entities'

@Injectable()
export class CreateModalityService {
  constructor(
    @InjectRepository(ModalityEntity)
    private readonly modalityRepository: Repository<ModalityEntity>
  ) {}

  public async createModality(modality: string) {
    const newModality = await this.modalityRepository.findOne({
      where: {
        modality: modality,
      },
    })

    if (!newModality) {
      await this.modalityRepository.save({
        modality: modality,
      })
      return true
    } else return false
  }
}
