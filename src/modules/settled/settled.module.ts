import { Module } from '@nestjs/common';
import { SettledService } from './settled.service';
import { SettledController } from './settled.controller';

@Module({
  providers: [SettledService],
  controllers: [SettledController]
})
export class SettledModule {}
