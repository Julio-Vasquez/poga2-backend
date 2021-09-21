import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Poga2Entity } from 'src/entities'
import { Poga2Dto } from '../dto/poga2.dto'

@Injectable()
export class CreatePoga2Service {
  constructor(
    @InjectRepository(Poga2Entity)
    private readonly poga2Repository: Repository<Poga2Entity>
  ) {}

  public async createPoga2(poga2: Poga2Dto) {}
}
