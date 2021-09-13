import { Module } from '@nestjs/common';
import { CommitteeService } from './committee.service';
import { CommitteeController } from './committee.controller';

@Module({
  providers: [CommitteeService],
  controllers: [CommitteeController]
})
export class CommitteeModule {}
