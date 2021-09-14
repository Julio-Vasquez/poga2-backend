import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from 'src/entities/role/role.entity'

@Injectable()
export class FindService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async findAll(): Promise<RoleEntity[] | any> {
    console.log('buscando todos')
    return [
      { id: 1, role: 'rol1' },
      { id: 2, role: 'rol2' },
      { id: 3, role: 'rol3' },
    ]
  }
}
