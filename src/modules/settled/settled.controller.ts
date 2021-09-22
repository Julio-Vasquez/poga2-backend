import { Body, Controller, Get, Post } from '@nestjs/common'
import { SettledDto } from './dto/settled.dto'

import { CreateSettledService, FindSettledService } from './services'

@Controller('settled')
export class SettledController {
  constructor(
    private readonly createSettledService: CreateSettledService,
    private readonly findSettledService: FindSettledService
  ) {}

  @Get('/')
  public async findAllSettled() {
    return await this.findSettledService.findAllSettled()
  }

  @Post('create')
  public async createSettled(@Body() settled: SettledDto) {
    return await this.createSettledService.createSettled(settled)
  }
}
