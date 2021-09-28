import { Injectable } from '@nestjs/common'
import { existsSync } from 'fs'

@Injectable()
export class FindPictureService {
  constructor() {}

  public async findPicture(picture: string) {
    const path = __dirname.replace(__dirname, 'uploads/person')

    return existsSync(`${path}/${picture}`)
      ? `${path}/${picture}`
      : `${path}/no_found.png`
  }
}
