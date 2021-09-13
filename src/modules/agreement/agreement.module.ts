import { Module } from '@nestjs/common';
import { AgreementService } from './agreement.service';
import { AgreementController } from './agreement.controller';

@Module({
  providers: [AgreementService],
  controllers: [AgreementController]
})
export class AgreementModule {}
