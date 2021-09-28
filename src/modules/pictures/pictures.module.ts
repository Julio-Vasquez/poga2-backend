import { Module } from '@nestjs/common'

import { PicturesController } from './pictures.controller'
import { FindPictureService } from './services/find.service'

@Module({
  providers: [FindPictureService],
  controllers: [PicturesController],
})
export class PicturesModule {}
