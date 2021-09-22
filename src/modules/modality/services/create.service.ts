import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ModalityEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { FAILED, SUCCESS } from 'src/modules/@common/constant/messages.constant'

@Injectable()
export class CreateModalityService {
  constructor(
    @InjectRepository(ModalityEntity)
    private readonly modalityRepository: Repository<ModalityEntity>
  ) {}

  public async createModality(modality: string): Promise<IResponse> {
    const newModality = await this.modalityRepository.findOne({
      modality: modality,
    })

    if (!newModality) {
      await this.modalityRepository.save({ modality })
      return { message: SUCCESS('Modalidad'), responseStatus: HttpStatus.OK }
    } else
      return {
        message: FAILED('Modalidad'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
