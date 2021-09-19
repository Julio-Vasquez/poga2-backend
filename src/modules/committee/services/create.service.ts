import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CommitteeEntity } from 'src/entities'

@Injectable()
export class CreateCommitteeService {
  constructor(
    @InjectRepository(CommitteeEntity)
    private readonly committeeRepository: Repository<CommitteeEntity>
  ) {}

  public async createCommittee(committee: string) {
    const newCommittee = await this.committeeRepository.findOne({
      where: {
        committee: committee,
      },
    })
    if (!newCommittee) {
      await this.committeeRepository.save({
        committee: committee,
      })
      return true
    } else return false
  }
}
