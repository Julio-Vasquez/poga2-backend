import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import App from './config/app.config'
import Orm from './config/orm.config'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.cwd() + '/.env',
      load: [Orm, App],
    }),
  ],
})
export class CommonModule {}
