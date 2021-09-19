import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ModalityEntity } from 'src/entities'
import { ModalityController } from './modality.controller'
import { CreateModalityService, FindModalityService } from './services'

@Module({
  imports: [TypeOrmModule.forFeature([ModalityEntity])],
  controllers: [ModalityController],
  providers: [CreateModalityService, FindModalityService],
})
export class ModalityModule {}
