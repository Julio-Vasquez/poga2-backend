import { Injectable } from '@nestjs/common'
import { existsSync } from 'fs'

@Injectable()
export class FindPictureService {
  constructor() {}

  public async findPicture(picture: string) {
    const path = __dirname.replace(
      'dist\\modules\\pictures\\services',
      'uploads/person'
    )
    return existsSync(`uploads/person/${picture}`)
      ? `${path}/${picture}`
      : `${path}/no_found.png`
  }
}
