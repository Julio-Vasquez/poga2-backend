import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AgreementController } from './agreement.controller'
import { AgreementEntity } from 'src/entities'
import { CreateAgreementService, FindAgreementService } from './services'

@Module({
  imports: [TypeOrmModule.forFeature([AgreementEntity])],
  providers: [CreateAgreementService, FindAgreementService],
  controllers: [AgreementController],
})
export class AgreementModule {}
