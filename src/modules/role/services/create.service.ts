import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoleEntity } from 'src/entities/role/role.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CreateService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async createRol() {
    return true
  }
}
