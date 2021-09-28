import { Controller, Get, Param, Res } from '@nestjs/common'
import { FindPictureService } from './services/find.service'

@Controller('picture')
export class PicturesController {
  constructor(private readonly findPictureService: FindPictureService) {}

  @Get(':profile')
  public async findPicture(@Param('profile') picture: string, @Res() res) {
    const result = await this.findPictureService.findPicture(picture)
    console.log(result)
    return res.sendFile(result, { root: '.' })
  }
}
