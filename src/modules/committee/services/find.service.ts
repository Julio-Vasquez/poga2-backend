import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CommitteeEntity } from 'src/entities'

@Injectable()
export class FindCommitteeService {
  constructor(
    @InjectRepository(CommitteeEntity)
    private readonly committeeRepository: Repository<CommitteeEntity>
  ) {}

  public async findAllCommittees() {
    return await this.committeeRepository.find({
      select: ['committee', 'uuidCommittee'],
    })
  }
}
