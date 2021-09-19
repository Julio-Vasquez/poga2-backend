import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SettledEntity } from 'src/entities'
import { CreateSettledService, FindSettledService } from './services'

import { SettledController } from './settled.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SettledEntity])],
  providers: [CreateSettledService, FindSettledService],
  controllers: [SettledController],
})
export class SettledModule {}
