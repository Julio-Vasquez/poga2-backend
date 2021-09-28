import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util'
import { HttpException } from '@nestjs/common'

export const fileFilter = (file: any, cb: Function, filter: string[]) => {
  const newFilter = filter.toString().replace(/\,/gi, '|'),
    regularExpression = new RegExp(`\/(${newFilter})$`)
  if (file.mimetype.match(regularExpression)) cb(null, true)
  else cb(new HttpException('no soportado', 400), false)
}

export const editFileName = (req, file: any, cb: Function) => {
  cb(null, `${randomStringGenerator()}.${file.mimetype.split('/')[1]}`)
}
