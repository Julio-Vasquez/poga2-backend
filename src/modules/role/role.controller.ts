import { Body, Controller, Get, Post } from '@nestjs/common'

import { RoleEntity } from 'src/entities'

import { CreateService, FindService } from './services'

@Controller('role')
export class RoleController {
  constructor(
    private readonly createRoleService: CreateService,
    private readonly findRolesService: FindService
  ) {}

  @Get('list')
  public async FindAllRoles() {
    return await this.findRolesService.findAll()
  }

  @Post('create')
  public async CreateRole(@Body('role') role: string) {
    return await this.createRoleService.createRol(role)
  }
}
