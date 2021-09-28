import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { unlinkSync } from 'fs'
import { diskStorage } from 'multer'
import { fileFilter, editFileName } from '../@common/util/files.util'

import { PersonDto } from './dto/person.dto'
import { CreatePersonService, FindPersonService } from './services'

@Controller('person')
export class PersonController {
  constructor(
    private readonly findPersonService: FindPersonService,
    private readonly createPersonservice: CreatePersonService
  ) {}

  @Get('/')
  public async findAllPerson() {
    return await this.findPersonService.findAllPerson()
  }

  @Post('/create')
  @UseInterceptors(
    FileInterceptor('urlPhoto', {
      fileFilter: (req, file, cb) =>
        fileFilter(file, cb, ['png', 'jpg', 'jpeg']),
      limits: { fileSize: 1000000 },
      storage: diskStorage({
        filename: editFileName,
        destination: './uploads/person',
      }),
    })
  )
  public async createPerson(
    @Body() person: PersonDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const res = await this.createPersonservice.createPerson(person, file)
    if (res.responseStatus === 200) {
      return res
    } else {
      unlinkSync(file.path)
      return res
    }
  }
}
