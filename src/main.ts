import { ValidationPipe, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import * as compression from 'compression'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: ['warn', 'error', 'log', 'debug'] }
  )
  const config: ConfigService = app.get(ConfigService)

  app.use(compression())
  app.useGlobalPipes(new ValidationPipe())

  app.setGlobalPrefix(config.get<string>('app.prefix'))

  await app.listen(3000, () => {
    Logger.debug('Init app ', 'Test')
    Logger.debug(`🔥🐱 ${config.get<string>('app.name')} 🐱🔥`, 'Logger-App')
    Logger.log(`🎓  Mode : dev 🎓`, 'Logger-App')
    Logger.debug(`Server: ${config.get<number>('app.host')}`, 'Logger-Server')
    Logger.debug(`Port: ${config.get<number>('app.port')}`, 'Logger-Server')
    Logger.debug(`Prefix: ${config.get<string>('app.prefix')}`, 'Logger-Server')
    Logger.log(`🚀 Running on 127.0.0.1:${8550}/p2/ 🚀 `, 'Logger-Server')
  })
}
bootstrap()
