import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateStateService, FindStateService } from './services'

@Controller('state')
export class StateController {
  constructor(
    private readonly findStateService: FindStateService,
    private readonly createStateService: CreateStateService
  ) {}

  @Get('/')
  public async findAllStates() {
    return await this.findStateService.findAllState()
  }

  @Post('create')
  public async createState(@Body('state') state: string) {
    return await this.createStateService.createState(state)
  }
}
