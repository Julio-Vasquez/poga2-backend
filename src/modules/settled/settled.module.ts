import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AgreementEntity, CommitteeEntity, SettledEntity } from 'src/entities'
import { CreateSettledService, FindSettledService } from './services'

import { SettledController } from './settled.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([SettledEntity, AgreementEntity, CommitteeEntity]),
  ],
  providers: [CreateSettledService, FindSettledService],
  controllers: [SettledController],
})
export class SettledModule {}
