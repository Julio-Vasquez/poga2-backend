import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateRoleService, FindRoleService } from './services'

@Controller('role')
export class RoleController {
  constructor(
    private readonly findRolesService: FindRoleService,
    private readonly createRoleService: CreateRoleService
  ) {}

  @Get('/')
  public async findAllRoles() {
    return await this.findRolesService.findAllRole()
  }

  @Post('create')
  public async createRole(@Body('role') role: string) {
    return await this.createRoleService.createRol(role)
  }
}
