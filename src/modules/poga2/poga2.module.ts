import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {
  ModalityEntity,
  PersonEntity,
  Poga2Entity,
  SettledEntity,
  StateEntity,
} from 'src/entities'
import { Poga2Controller } from './poga2.controller'
import { CreatePoga2Service, FindPoga2Service } from './services'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModalityEntity,
      PersonEntity,
      Poga2Entity,
      SettledEntity,
      StateEntity,
    ]),
  ],
  providers: [CreatePoga2Service, FindPoga2Service],
  controllers: [Poga2Controller],
})
export class Poga2Module {}
