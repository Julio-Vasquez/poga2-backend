import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateModalityService, FindModalityService } from './services'

@Controller('modality')
export class ModalityController {
  constructor(
    private readonly createModalityService: CreateModalityService,
    private readonly findModalityService: FindModalityService
  ) {}

  @Get('list')
  public async findAllModality() {
    return await this.findModalityService.findAllModality()
  }

  @Post('create')
  public async createModality(@Body('modality') modality: string) {
    return await this.createModalityService.createModality(modality)
  }
}
