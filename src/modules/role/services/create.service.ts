import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from 'src/entities'
import { IResponse } from 'src/modules/@common/interface/response.interface'
import { FAILED, SUCCESS } from 'src/modules/@common/constant/messages.constant'

@Injectable()
export class CreateRoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async createRol(role: string): Promise<IResponse> {
    const newRole = await this.roleRepository.findOne({
      role: role,
    })

    if (!newRole) {
      await this.roleRepository.save({ role })
      return { message: SUCCESS('Rol'), responseStatus: HttpStatus.OK }
    } else
      return { message: FAILED('Rol'), responseStatus: HttpStatus.NOT_FOUND }
  }
}
