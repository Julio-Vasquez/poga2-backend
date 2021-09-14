import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CommonModule } from './modules/@common/@common.module'

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cs: ConfigService) => cs.get('typeorm'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
