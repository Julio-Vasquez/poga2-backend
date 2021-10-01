import { ValidationPipe, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as compression from 'compression'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error', 'log', 'debug'],
    cors: true,
  })
  const config: ConfigService = app.get(ConfigService)

  app.enableCors()

  app.use(compression())
  app.useGlobalPipes(new ValidationPipe())

  app.setGlobalPrefix(config.get<string>('app.prefix'))

  const PORT = process.env.PORT || config.get<number>('app.port') || 3000

  await app.listen(PORT, '0.0.0.0', async () => {
    Logger.debug('Init app ', 'Test')
    Logger.debug(`🔥🐱 ${config.get<string>('app.name')} 🐱🔥`, 'Logger-App')
    Logger.log(`🎓  Mode : dev 🎓`, 'Logger-App')
    Logger.debug(`Server: ${config.get<number>('app.host')}`, 'Logger-Server')
    Logger.debug(`Port: ${config.get<number>('app.port')}`, 'Logger-Server')
    Logger.debug(`Prefix: ${config.get<string>('app.prefix')}`, 'Logger-Server')
    Logger.log(`🚀 Running on : ${await app.getUrl()}/p2/ 🚀 `, 'Logger-Server')
  })
}
bootstrap()
