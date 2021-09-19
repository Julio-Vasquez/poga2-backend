import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from 'src/entities'

@Injectable()
export class CreateService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async createRol(role: string): Promise<boolean> {
    const newRole = await this.roleRepository.findOne({
      where: {
        role: role,
      },
    })

    if (!newRole) {
      await this.roleRepository.save({
        role: role,
      })
      return true
    } else return false
  }
}
