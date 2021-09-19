import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RoleController } from './role.controller'
import { CreateService, FindService } from './services'

import { RoleEntity } from 'src/entities'

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [CreateService, FindService],
  controllers: [RoleController],
})
export class RoleModule {}
