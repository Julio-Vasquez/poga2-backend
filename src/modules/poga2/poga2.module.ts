import { Module } from '@nestjs/common';
import { Poga2Service } from './poga2.service';
import { Poga2Controller } from './poga2.controller';

@Module({
  providers: [Poga2Service],
  controllers: [Poga2Controller]
})
export class Poga2Module {}
