import { Module } from '@nestjs/common';
import { ModalityController } from './modality.controller';
import { ModalityService } from './modality.service';

@Module({
  controllers: [ModalityController],
  providers: [ModalityService]
})
export class ModalityModule {}
