import { Controller, Get, Post } from '@nestjs/common'
import { RoleEntity } from 'src/entities/role/role.entity'
import { CreateService, FindService } from './services'

@Controller('role')
export class RoleController {
  constructor(
    private readonly createRoleService: CreateService,
    private readonly findRolesService: FindService
  ) {}

  @Get('list')
  public async FindAllRoles() {
    const res: RoleEntity[] = await this.findRolesService.findAll()
    return res
  }

  @Post('create')
  public async CreateRole() {
    const res: boolean = await this.createRoleService.createRol()
  }
}
