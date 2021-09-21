import { Body, Controller, Get, Post } from '@nestjs/common'
import { Poga2Dto } from './dto/poga2.dto'
import { CreatePoga2Service, FindPoga2Service } from './services'

@Controller('poga2')
export class Poga2Controller {
  constructor(
    private readonly createPoga2Service: CreatePoga2Service,
    private readonly findPoga2Service: FindPoga2Service
  ) {}

  @Get('/')
  public async findAllPoga2() {
    return await this.findPoga2Service.findAllPoga2()
  }

  @Post('create')
  public async createPoga2(@Body() poga2: Poga2Dto) {
    return await this.createPoga2Service.createPoga2(poga2)
  }
}
