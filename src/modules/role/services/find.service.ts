import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from 'src/entities'

@Injectable()
export class FindRoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async findAllRole(): Promise<RoleEntity[]> {
    return await this.roleRepository.find({
      select: ['role', 'uuidRole'],
    })
  }
}
