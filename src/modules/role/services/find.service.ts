import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from 'src/entities'

@Injectable()
export class FindService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async findAll(): Promise<RoleEntity[] | any> {
    return await this.roleRepository.find({
      select: ['role', 'auRole'],
    })
  }
}
