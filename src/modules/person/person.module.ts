import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonEntity } from 'src/entities'

import { PersonController } from './person.controller'
import { CreatePersonService, FindPersonService } from './services'

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  providers: [CreatePersonService, FindPersonService],
  controllers: [PersonController],
})
export class PersonModule {}
