import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommitteeEntity } from 'src/entities'

import { CommitteeController } from './committee.controller'
import { CreateCommitteeService, FindCommitteeService } from './services'

@Module({
  imports: [TypeOrmModule.forFeature([CommitteeEntity])],
  providers: [CreateCommitteeService, FindCommitteeService],
  controllers: [CommitteeController],
})
export class CommitteeModule {}
