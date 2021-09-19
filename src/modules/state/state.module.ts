import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { StateEntity } from 'src/entities'

import { CreateStateService, FindStateService } from './services'

import { StateController } from './state.controller'

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  providers: [CreateStateService, FindStateService],
  controllers: [StateController],
})
export class StateModule {}
