import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RoleController } from './role.controller'
import { CreateRoleService, FindRoleService } from './services'

import { RoleEntity } from 'src/entities'

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [CreateRoleService, FindRoleService],
  controllers: [RoleController],
})
export class RoleModule {}
